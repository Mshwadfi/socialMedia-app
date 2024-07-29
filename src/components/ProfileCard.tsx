import Link from 'next/link'
import Image from 'next/image' 
import React from 'react'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lib/index'


interface User {
  id: string;
  clerkId: string;
  username: string | null;
  avatar: string | null;
  cover: string | null;
  name: string | null;
  surname: string | null;
  description: string | null;
  city: string | null;
  school: string | null;
  work: string | null;
  website: string | null;
  createdAt: Date;
}
const ProfileCard = async() => {

  const {userId} = auth();
  console.log(auth() , 'auth info');
  if(! userId) return null;
  const user = await prisma.user.findFirst({
    where:{
      clerkId: userId,
    },
    include: {
      _count:{
        select:{
          followers:true,
        }
      }
    }
  });

  if(!user) return null;
  const {cover,avatar,name,surname,_count} = user;
  
  console.log(userId,user )
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
    <div className="h-20 relative">
      <Image
        src={cover || "https://images.pexels.com/photos/21550548/pexels-photo-21550548/free-photo-of-waves-of-a-sea-hitting-rocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}
        alt=""
        fill
        className="rounded-md object-cover"
      />
      <Image
        src={ avatar || '/noAvatar.png'}
        alt=""
        width={48}
        height={48}
        className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
      />
    </div>
    <div className="h-20 flex flex-col gap-2 items-center">
      <span className="font-semibold">
        {name} {surname}
      </span>
      <div className="flex items-center gap-4">
        <div className="flex">
          <Image
            src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={12}
            height={12}
            className="rounded-full object-cover w-3 h-3"
          />
          <Image
            src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={12}
            height={12}
            className="rounded-full object-cover w-3 h-3"
          />
          <Image
            src="https://images.pexels.com/photos/19578755/pexels-photo-19578755/free-photo-of-woman-watching-birds-and-landscape.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={12}
            height={12}
            className="rounded-full object-cover w-3 h-3"
          />
        </div>
        <span className="text-xs text-gray-500">
          {_count.followers} Followers
        </span>
      </div>
      <Link href={`/profile/${userId}`}>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          My Profile
        </button>
      </Link>
    </div>
  </div>
  )
}

export default ProfileCard
