'use client'
import React from 'react'
import Image from 'next/image'

const SingleFriendRequest = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/noAvatar.png"
            alt="Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">
            Friend Name {/* Add the friend's name here */}
          </span>
        </div>
        <div className="flex gap-3 justify-end">
          <form onSubmit={(e) => e.preventDefault()}>
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
          <form onSubmit={(e) => e.preventDefault()}>
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
    </div>
  )
}

export default SingleFriendRequest
