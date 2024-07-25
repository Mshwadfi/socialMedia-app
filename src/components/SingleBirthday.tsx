import React from 'react'
import Image from 'next/image'

const SingleBirthday = () => {
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
            <button className='bg-blue-400 px-4 py-2 rounded-md text-white'>Celebrate</button>
        </div>
      </div>
    </div>
  )
}

export default SingleBirthday
