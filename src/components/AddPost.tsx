import React from 'react'
import Image from 'next/image'
import PostOptions from './PostOptions'

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
    {/* AVATAR */}
    <Image
      src={""}
      alt=""
      width={48}
      height={48}
      className="w-12 h-12 object-cover rounded-full"
    />
    {/* POST */}
    <div className="flex-1">
      {/* TEXT INPUT */}
      <form  className="flex gap-4">
        <textarea
          placeholder="What's on your mind?"
          className="flex-1 bg-slate-100 rounded-lg p-2"
          name="desc"
        
        ></textarea>
        <div className="">
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          
        </div>
      </form>
      <PostOptions />
      
    </div>
  </div>
  )
}

export default AddPost
