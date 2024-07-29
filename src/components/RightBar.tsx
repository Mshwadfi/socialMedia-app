import React from 'react'
import FriendsRequests from './FriendsRequests'
import Birthdays from './Birthdays'
import Ads from './Ads'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'
import { User } from '@prisma/client'

const RightBar = ({user}: {user? : User}) => {
  return (
    <div className='flex flex-col gap-4'>
      {
        user && <>
          <UserInfoCard user={user}/>
          <UserMediaCard userID=''/>
        </>
      }
      <FriendsRequests />
      <Birthdays />
      <Ads size='md'/>
    </div>
  )
}

export default RightBar
