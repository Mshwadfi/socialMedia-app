'use server'
import { auth } from "@clerk/nextjs/server"
import prisma from ".";

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