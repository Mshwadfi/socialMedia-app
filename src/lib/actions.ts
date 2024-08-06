'use server'
import { auth } from "@clerk/nextjs/server"
import prisma from ".";
import { object, z } from "zod";
import { revalidatePath } from "next/cache";

const AreWeFriends = async(currentUserId:string , visitedUserId:string)=>{
    const AmIFollower = await prisma.follower.findFirst({
        where:{
            followerId: currentUserId,
            followingId: visitedUserId,
        },
    });
    return AmIFollower;
}

const deleteFollower = async (currentUserId : string)=>{
    await prisma.follower.delete({
        where:{
            id: currentUserId,
        }
    })
}
const isThereAfollowRequest = async(senderId:string,receiverId:string)=>{
    return  await prisma.followRequest.findFirst({
        where: {
          senderId,
          receiverId,
        },
      });
}
const createFollowRequest = async(senderId:string,receiverId:string)=>{
    await prisma.followRequest.create({
        data:{
            senderId,
            receiverId,
        }
    })
}
const deleteFollowRequest = async(senderId:string , receiverId:string)=>{
    await prisma.followRequest.delete({
        where:{
            senderId_receiverId: {
                senderId,
                receiverId,
            },
        }
    })
}

const isLiked = async(postId:string , userId:string)=>{
    return await prisma.like.findFirst({
        where: {
          postId,
          userId,
        },
      });
}
const deleteLike = async(postId:string) =>{
    await prisma.like.delete({
        where: {
          id: postId,
        },
      });
}
const addLike = async(postId:string , userId:string)=>{
    return await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });
}
const isUserBlocked = async(blockerId:string , blockedId:string)=>{
    return await prisma.block.findFirst({
        where:{
            blockedClerkId: blockedId,
            blockerClerkId: blockerId,
        }
    })
}

const deleteBlock = async(currentUserId:string , visitedUserId:string)=>{
    await prisma.block.delete({
        where: {
            blockerClerkId_blockedClerkId: {
                blockedClerkId: visitedUserId,
                blockerClerkId: currentUserId,
            },
        },
    });
}
const blockUser = async(blockerId:string , blockedId:string)=>{
    await prisma.block.create({
        data:{
            blockerClerkId: blockerId,
            blockedClerkId: blockedId,
        }
    })
}

const fetchFollowRequest = async(senderId:string,receiverId:string)=>{
    return await prisma.followRequest.findFirst({
        where:{
            senderId,
            receiverId,
        }
    })
}

const addFollower = async(followerId:string,followingId:string)=>{
    await prisma.follower.create({
        data:{
            followerId,
            followingId,
        }
    })
}
export const rejectFollow = async(id:string)=>{
    console.log('follow rejected')
    await prisma.followRequest.delete({
        where: {
            id,
          },
    })
}
export const getUserFollowRequest = async(receiverId:string)=>{
    return await prisma.followRequest.findMany({
        where:{
            receiverId,
        },
        include:{
            sender: true,
        }
    })
}
export const acceptFollowRequest = async(senderId:string)=>{
    console.log('follow accepted')
    const {userId : currentUserId} = auth();
    console.log(currentUserId , senderId)
    const followRequest = await fetchFollowRequest(senderId,currentUserId!);
    if(followRequest){
        await rejectFollow(followRequest.id);
        await addFollower(senderId,currentUserId!);
    }
}
export const fetchUserMedia = async (visitedUserId:string) => {
    return await prisma.post.findMany({
      where: {
        userId: visitedUserId,
      },
      select: {
        img: true,
        id: true,
        desc: true,
      },
    });
  }
export const toggleFollowRequest = async(visitedUserId : string)=>{
    console.log('try follow')
    const {userId : currentUserId} = auth();
    if(!currentUserId) return null;

    try {
        //follow -> unfollow
        const isFollower = await AreWeFriends(currentUserId , visitedUserId);
        if(isFollower){
           await deleteFollower(currentUserId);
        };

        //follow request -> delete request
        //norequest -> send request
        if(!isFollower){
            const checkExistingRequest = await isThereAfollowRequest(currentUserId,visitedUserId);
            checkExistingRequest? deleteFollowRequest(currentUserId , visitedUserId) : createFollowRequest(currentUserId,visitedUserId);
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const toggleBlock = async (visitedUserId : string)=>{
    const {userId : currentUserId} = auth();
    console.log('try block')
    if(!currentUserId) return null;
    try {
        const blocked = await isUserBlocked(currentUserId , visitedUserId);
        if(blocked) await deleteBlock(currentUserId , visitedUserId);
        else await blockUser(currentUserId , visitedUserId);
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = async (prevState:{success:boolean,error:boolean},payload:{formData : FormData , cover:string}) => {
    const {formData , cover} = payload;
    const fields = Object.fromEntries(formData);
  
    const filteredFields = Object.fromEntries(
      Object.entries(fields).filter(([_, value]) => value !== "")
    );
  
    const Profile = z.object({
      cover: z.string().optional(),
      name: z.string().max(60).optional(),
      surname: z.string().max(60).optional(),
      description: z.string().max(300).optional(),
      city: z.string().max(60).optional(),
      school: z.string().max(60).optional(),
      work: z.string().max(60).optional(),
      website: z.string().max(60).optional(),
    });
  
    const validatedFields = Profile.safeParse( {...filteredFields,cover} );
  
    if (!validatedFields.success) {
      console.log(validatedFields.error.flatten().fieldErrors);
      return { success: false, error: true };
    }
  
    const { userId:currentUserId } = auth();
  
    if (!currentUserId) {
      return { success: false, error: true };
    }
  
    try {
      const user = await prisma.user.update({
        where: {
          clerkId: currentUserId,
        },
        data: validatedFields.data,
      });
      revalidatePath(`/profile/${currentUserId}`)
      console.log('updated', user,validatedFields)
      return { success: true, error: false };
    } catch (err) {
      console.log(err);
      return { success: false, error: true };
    }
  };
  
  export const AddOrRemoveLike = async(postId:string)=>{
    const {userId:currentUserId} = auth();
    if(!currentUserId) return null;

    try {
        const liked = await isLiked(postId , currentUserId);
        if(liked) await deleteLike(liked.id);
        else await addLike(postId,currentUserId);
    } catch (error) {
        console.log(error);
    }
  }

  export const addComment = async (postId: string, desc: string) => {
    const { userId } = auth();
  
    if (!userId) throw new Error("User is not authenticated!");
  
    try {
      const createdComment = await prisma.comment.create({
        data: {
          desc,
          userId,
          postId,
        },
        include: {
          user: true,
        },
      });
  
      return createdComment;
    } catch (err) {
      console.log(err);
      throw new Error("Something went wrong!");
    }
  };

  export const createPost = async (formData: FormData, img: string) => {
    console.log(formData,'data')
    const desc = formData.get("desc") as string;
  
    const Desc = z.string().min(1).max(300);
  
    const validatedDesc = Desc.safeParse(desc);
  
    if (!validatedDesc.success) {
      console.log("description is not valid");
      return;
    }
    const { userId:currentUserId } = auth();
  
    if (!currentUserId) throw new Error("User is not authenticated!");
  
    try {
      await prisma.post.create({
        data: {
          desc: validatedDesc.data,
          userId:currentUserId,
          img,
        },
      });
  
      revalidatePath("/");
    } catch (err) {
      console.log(err);
    }
  };


  export const addStory = async (img: string) => {
    const { userId } = auth();
  
    if (!userId) throw new Error("User is not authenticated!");
  
    try {
      const existingStory = await prisma.story.findFirst({
        where: {
          userId,
        },
      });
  
      if (existingStory) {
        await prisma.story.delete({
          where: {
            id: existingStory.id,
          },
        });
      }
      const createdStory = await prisma.story.create({
        data: {
          userId,
          img,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        },
        include: {
          user: true,
        },
      });
  
      return createdStory;
    } catch (err) {
      console.log(err);
    }
  };

  export const deletePost = async (postId: string) => {
    const { userId } = auth();
  
    if (!userId) throw new Error("User is not authenticated!");
  
    try {
      await prisma.post.delete({
        where: {
          id: postId,
          userId,
        },
      });
      revalidatePath("/")
    } catch (err) {
      console.log(err);
    }
  };