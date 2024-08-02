import React from 'react'
import Image from 'next/image'
import PostInterActions from './PostInterActions'
import PostInfo from './PostInfo'
import Comments from './Comments'
import CommentList from './CommentList'
import { Post as PostType, User } from '@prisma/client'


type FeedPostType = PostType & { user: User } & {
    likes: [{ userId: string }];
  } & {
    _count: { comments: number };
  };
const Post = ({post}:{post:FeedPostType}) => {
    const {desc, id , img,createdAt,updatedAt,user,likes,_count} = post;
  return (
    <div className="bg-white p-2 rounded-lg flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={user.avatar || 'noAvatar.png'} width={40} height={40} alt="" className="w-10 h-10 rounded-full" />
                <span className="font-medium">{user.name} {user.surname}</span>
            </div>
            <PostInfo />
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src={img || ''} fill className="object-cover rounded-md" alt="" />
            </div>
        
            <p>{desc}</p>
        </div>
        
        <PostInterActions postId={id} likes={likes.map(like=>like.userId)} commentNumber={_count.comments}/>  
        <Comments />
        <CommentList />  
  </div>
  )
}

export default Post
