import React from 'react'
import Image from 'next/image'
import PostInterActions from './PostInterActions'
import PostInfo from './PostInfo'
import Comments from './Comments'
import CommentList from './CommentList'
const Post = () => {
  return (
    <div className="bg-white p-2 rounded-lg flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={"https://images.pexels.com/photos/27275527/pexels-photo-27275527/free-photo-of-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} width={40} height={40} alt="" className="w-10 h-10 rounded-full" />
                <span className="font-medium">Ali</span>
            </div>
            <PostInfo />
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src={'https://images.pexels.com/photos/13794444/pexels-photo-13794444.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} fill className="object-cover rounded-md" alt="" />
            </div>
        
            <p>fdfg fghg</p>
        </div>
        
        <PostInterActions />  
        <Comments />
        <CommentList />  
  </div>
  )
}

export default Post
