import React from 'react'
import Post from './Post'
import prisma from '@/lib';
import { auth } from '@clerk/nextjs/server';

const Feed = async({userId}:{userId? : string}) => {
  let posts:any[] =[];
  const {userId : currentUserId} = auth();
  if (userId) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          clerkId: userId,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  if (!userId && currentUserId) {
    const following = await prisma.follower.findMany({
      where: {
        followerId: currentUserId,
      },
      select: {
        followingId: true,
      },
    });

    const followingIds = following.map((f) => f.followingId);
    const ids = [currentUserId,...followingIds]
    console.log(ids,'idss')
    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: ids,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  console.log(posts,'userp')
  return (
    <div className=' flex flex-col gap-4'>
      {
        posts.length? 
        posts.map(post =>(
          <Post post={post} key={post.id} />
        ))
        :'No Posts Found'
      }
    </div>
  )
}

export default Feed
