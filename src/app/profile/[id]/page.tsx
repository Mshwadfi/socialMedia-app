import AddPost from "@/components/AddPost"
import Feed from "@/components/Feed"
import LeftBar from "@/components/LeftBar"
import RightBar from "@/components/RightBar"
import Stories from "@/components/Stories"
import prisma from "@/lib"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"

const page = async({params}:{params : {id : string}}) => {
  console.log(params)
  const {id} = params;
  let isBlocked = false;
  const user = await prisma.user.findFirst({
    where:{
      clerkId:id,
    },
    include:{
      _count:{
        select:{
          followers: true,
          followings: true,
          posts: true,
        }
      }
    }
  });
  if(!user) return null;
  const {_count,name,surname,avatar,cover} = user;
  const {userId: currentUserId} = auth();
  console.log(currentUserId , id,'comppppp');
  if(currentUserId ){
    const res = await prisma.block.findFirst({
      where:{
        blockedClerkId: currentUserId,
        blockerClerkId: id,
      }
    })
    if(res) isBlocked = true;
  }
  if(isBlocked) return null;
  return (
    <div className='flex gap-5 bg-slate-100 p-3'>
      <div className="hidden xl:block w-[20%] p-4">
        <LeftBar type="profile"/>
      </div>
      <div className="w-full flex flex-col gap-5 lg:w-[70%] xl:w-[50%] p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="h-64 w-full relative">
          <Image alt="" src={cover || 'https://images.pexels.com/photos/27287734/pexels-photo-27287734/free-photo-of-follow-the-red-line.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}  fill className="rounded-md object-cover" />
          
          
            <Image alt="" src={avatar || 'https://images.pexels.com/photos/27364868/pexels-photo-27364868/free-photo-of-retratos-de-um-jovem-dancarino-e-influencer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} width={128} height={128}  className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-14 object-cover ring-2 ring-white" />
          </div>
          <h1 className="mt-20 mb-6 font-bold text-xl">{name} {surname}</h1>
          <div className="flex items-center justify-center gap-6">
            <span className="text-gray-500">{_count.posts} Posts</span>
            <span className="text-gray-500">{_count.followers} Followers</span>
            <span className="text-gray-500">{_count.followings} Following</span>
          </div>
        </div>
        <Feed />
      </div>
      <div className="hidden lg:block w-[30%] p-4">
        <RightBar user={user}/>
      </div>
    </div>
  )
}

export default page
