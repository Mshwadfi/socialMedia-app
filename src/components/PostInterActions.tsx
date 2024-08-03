'use client'
import React, { useOptimistic, useState } from 'react'
import Image from 'next/image'
import { useAuth } from '@clerk/nextjs';
import { AddOrRemoveLike } from '@/lib/actions';
const PostInterActions = ({ postId, likes, commentNumber }: { postId: string; likes: string[]; commentNumber: number }) => {
  
  const { isLoaded, userId } = useAuth();
  const [likeState , setLikeState] = useState({
    likeCount: likes?.length,
    isLiked: userId? likes?.includes(userId) : false,
  })
  const updateState = (state:{likeCount:number,isLiked: boolean}) => {
    return {
      likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
      isLiked: !state.isLiked,
    };
  }
  const [optimistikLikeState , switchOptimistikLikeState] = useOptimistic(likeState,updateState);

  const updateLike = async()=>{
    switchOptimistikLikeState('');
    try {
      await AddOrRemoveLike(postId);
      setLikeState((state)=>({likeCount: state.isLiked? state.likeCount - 1 : state.likeCount + 1, isLiked: !state.isLiked}))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-between text-sm my-4">
    <div className="flex  gap-8">
      <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
        <form action={updateLike}>
          <button>
            <Image
              src={optimistikLikeState.isLiked? "/liked.png":"/like.png"}
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
          </button>
        </form>
        <span className="text-gray-300">|</span>
        <span className="text-gray-500">
         {optimistikLikeState.likeCount}
          <span className="hidden md:inline"> Likes</span>
        </span>
      </div>
      <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
        <Image
          src="/comment.png"
          width={16}
          height={16}
          alt=""
          className="cursor-pointer"
        />
        <span className="text-gray-300">|</span>
        <span className="text-gray-500">
          {commentNumber}<span className="hidden md:inline"> Comments</span>
        </span>
      </div>
    </div>
    <div className="">
      <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
        <Image
          src="/share.png"
          width={16}
          height={16}
          alt=""
          className="cursor-pointer"
        />
        <span className="text-gray-300">|</span>
        <span className="text-gray-500">
          <span className="hidden md:inline"> Share</span>
        </span>
      </div>
    </div>
  </div>
  )
}

export default PostInterActions
