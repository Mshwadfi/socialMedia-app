import React from 'react'
import Image from 'next/image'
import { User } from '@clerk/nextjs/server';
import { acceptFollowRequest, rejectFollow } from '@/lib/actions';
import AcceptAndRejectFollow from './AcceptAndRejectFollow';

interface UserData {
  id: string;
  clerkId: string;
  username?: string | null; // Allow null
  avatar?: string | null;
  cover?: string | null;
  name?: string | null;
  surname?: string | null;
  description?: string | null;
  city?: string | null;
  school?: string | null;
  work?: string | null;
  website?: string | null;
  createdAt: Date;
}
interface IRequest {
  id: string;
  createdAt: Date;
  senderId: string;
  receiverId: string;
  sender: UserData;
}

const SingleFriendRequest = async({ id, createdAt, senderId, receiverId,sender }: IRequest) => {
  const {name,surname,avatar} = sender;
  const request = {id, createdAt, senderId, receiverId,sender};
  
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={avatar!}
            alt="Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">
            {name} {surname}
          </span>
        </div>
        <AcceptAndRejectFollow senderId={senderId} receiverId={receiverId} />
      </div>
    </div>
  )
}

export default SingleFriendRequest
