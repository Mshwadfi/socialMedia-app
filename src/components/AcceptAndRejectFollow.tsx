// "use client"; directive should be the first line in the file to enable client-side rendering
"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { acceptFollowRequest, rejectFollow } from '@/lib/actions';

interface AcceptAndRejectFollowProps {
  senderId: string;
  receiverId: string;
}

const AcceptAndRejectFollow = ({ senderId, receiverId }:{ senderId:string, receiverId:string }) => {

  const handleAccept = async () => {
    
    try {
      await acceptFollowRequest(senderId);
    } catch (error) {
      console.error('Error accepting follow request:', error);
    }
  };

  const handleReject = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await rejectFollow(senderId, receiverId);
    } catch (error) {
      console.error('Error rejecting follow request:', error);
    }
  };

  return (
    <div>
      <div className="flex gap-3 justify-end">
        <form action={handleAccept}>
          <button type="submit">
            <Image
              src="/accept.png"
              alt="Accept"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </button>
        </form>
        <form onSubmit={handleReject}>
          <button type="submit">
            <Image
              src="/reject.png"
              alt="Reject"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </button>
        </form>
      </div>
    </div>
  )
}

export default AcceptAndRejectFollow
