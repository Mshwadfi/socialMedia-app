import React from 'react'
import FriendsRequests from './FriendsRequests'
import Birthdays from './Birthdays'
import Ads from './Ads'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

const RightBar = ({userID}: {userID? : string}) => {
  return (
    <div className='flex flex-col gap-4'>
      {
        userID && <>
          <UserInfoCard userID=''/>
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
