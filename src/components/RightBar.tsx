import React from 'react'
import FriendsRequests from './FriendsRequests'
import Birthdays from './Birthdays'
import Ads from './Ads'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import { User } from '@prisma/client'

const RightBar = ({visitedUserProfile}: {visitedUserProfile? : User}) => {
  return (
    <div className='flex flex-col gap-4'>
      {
        visitedUserProfile && <>
          <UserInfoCard user={visitedUserProfile}/>
          <UserMediaCard userID={visitedUserProfile.clerkId}/>
        </>
      }
      <FriendsRequests userId={visitedUserProfile?.clerkId!}/>
      <Birthdays />
      <Ads size='md'/>
    </div>
  )
}

export default RightBar
