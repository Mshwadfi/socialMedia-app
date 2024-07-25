import React from 'react'
import Image from 'next/image'
import PostInterActions from './PostInterActions'
import PostInfo from './PostInfo'
import Comments from './Comments'
import CommentList from './CommentList'
const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={""} width={40} height={40} alt="" className="w-10 h-10 rounded-full" />
                <span className="font-medium">Ali</span>
            </div>
            <PostInfo />
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src={''} fill className="object-cover rounded-md" alt="" />
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
