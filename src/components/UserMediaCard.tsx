import { fetchUserMedia } from '@/lib/actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = async({userID}: {userID? : string}) => {
    if(!userID) return null;
    const userMedia = await fetchUserMedia(userID);
    console.log(userID , 'id' , userMedia,'user Media');
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>User Media</span>
            <Link href={'/'} className='text-blue-500 text-sm'>See All</Link>
        </div>

        <div className='flex justify-start gap-2 flex-wrap'>
            {
                !userMedia?.length? "no media found" : 
                userMedia.map(post => (
                    <div className='relative w-[23.2%] h-28' key={post.id}>
                        <Image src={post?.img!} alt='' fill className='object-cover rounded-md'/>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default UserMediaCard
