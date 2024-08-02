import Link from 'next/link'
import React from 'react'
import SingleFriendRequest from './SingleFriendRequest'
import { getUserFollowRequest } from '@/lib/actions'
import { auth } from '@clerk/nextjs/server'

const FriendsRequests = async({userId}:{userId: string}) => {

  const{userId:currentUserId} = auth();  
  const FollowRequests = await getUserFollowRequest(currentUserId!);
  console.log(FollowRequests)
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
    {/* TOP */}
    <div className="flex justify-between items-center font-medium">
      <span className="text-gray-500">Friend Requests</span>
      <Link href="/" className="text-blue-500 text-xs">
        See all
      </Link>
    </div>
    {
      FollowRequests.length? 
      FollowRequests.map(request =>(
        <SingleFriendRequest {...request} key={request.id}/>
      )):
      'No Requests'
    }
  </div>
  )
}

export default FriendsRequests
