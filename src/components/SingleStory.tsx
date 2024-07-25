import Image from 'next/image'
import React from 'react'

const SingleStory = () => {
  return (
    <div className='flex flex-col items-center gap-2 cursor-pointer'>
        <Image src={''} alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
        <span>Ali</span>
    </div>
  )
}

export default SingleStory
