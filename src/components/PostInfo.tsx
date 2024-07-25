'use client'
import React, { useState } from 'react'
import Image from 'next/image'


const PostInfo = () => {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <div className="relative">
      <Image
        src="/more.png"
        width={16}
        height={16}
        alt=""
        onClick={()=> setIsOpen((prev) => !prev)}
        className="cursor-pointer"
      />
       {isOpen && (
        <div className="absolute top-4 right-0 bg-white p-4 w-32 rounded-lg flex flex-col gap-2 text-xs shadow-lg z-30">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-post</span>
          <form >
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default PostInfo
