import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-24 flex justify-between items-center'>
      <div className='md:hidden lg:block w-[20%]'>
        <Link href={'/'} className='font-extrabold text-blue-500 text-xl'>My App</Link>
      </div>
      <div className='hidden md:flex w-[59%]'>
        <div className='flex gap-5 text-gray-500 text-lg'>
            <Link href={'/'} className='flex items-center gap-2'>
                <Image src='/home.png' alt='home' width={16} height={16} className='w-4 h-4 mb-0.5'/>
                <span>Home</span>
            </Link>
            <Link href={'/'} className='flex items-center gap-2'>
                <Image src='/friends.png' alt='friends' width={16} height={16} className='w-4 h-4'/>
                <span>Friends</span>
            </Link>
            <Link href={'/'} className='flex items-center gap-2'>
                <Image src='/stories.png' alt='stories' width={16} height={16} className='w-4 h-4'/>
                <span>Stories</span>
            </Link>
            
        </div>
      </div>
      <div className='w-[30%] flex items-center justify-end gap-2 md:hidden'><HamburgerMenu /></div>
    </div>
  )
}

export default Navbar
