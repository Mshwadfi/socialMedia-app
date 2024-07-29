import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({userID}: {userID? : string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>User Media</span>
            <Link href={'/'} className='text-blue-500 text-sm'>See All</Link>
        </div>

        <div className='flex justify-start gap-2 flex-wrap'>
            <div className='relative w-[23.2%] h-28'>
                <Image src={'https://images.pexels.com/photos/27269578/pexels-photo-27269578/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'} alt='' fill className='object-cover rounded-md'/>
            </div>
            <div className='relative w-[23.2%] h-28'>
                <Image src={'https://images.pexels.com/photos/27269578/pexels-photo-27269578/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'} alt='' fill className='object-cover rounded-md'/>
            </div>
            <div className='relative w-[23.2%] h-28'>
                <Image src={'https://images.pexels.com/photos/27269578/pexels-photo-27269578/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'} alt='' fill className='object-cover rounded-md'/>
            </div>
            <div className='relative w-[23.2%] h-28'>
                <Image src={'https://images.pexels.com/photos/27269578/pexels-photo-27269578/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'} alt='' fill className='object-cover rounded-md'/>
            </div>
            <div className='relative w-[23.2%] h-28'>
                <Image src={'https://images.pexels.com/photos/27269578/pexels-photo-27269578/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'} alt='' fill className='object-cover rounded-md'/>
            </div>
            <div className='relative w-[23.2%] h-28'>
                <Image src={'https://images.pexels.com/photos/27269578/pexels-photo-27269578/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'} alt='' fill className='object-cover rounded-md'/>
            </div>
            <div className='relative w-[23.2%] h-28'>
                <Image src={'https://images.pexels.com/photos/27269578/pexels-photo-27269578/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load'} alt='' fill className='object-cover rounded-md'/>
            </div>
        </div>
      
    </div>
  )
}

export default UserMediaCard
