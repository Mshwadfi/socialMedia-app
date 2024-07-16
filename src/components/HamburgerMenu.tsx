'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const HamburgerMenu = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
  return (
    <div className='md:hidden'>
      <div className='flex flex-col gap-1 cursor-pointer' onClick={()=>{setIsMenuOpen((prev)=> !prev)}}>
        <div className={`w-8 h-1 rounded-md bg-blue-500 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''} origin-left`} />
        <div className={`w-8 h-1 rounded-md bg-blue-500 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-8 h-1 rounded-md bg-blue-500 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? '-rotate-45 translate-y-2.5' : ''} origin-left`} />
      </div>

      {isMenuOpen && <div className=' absolute left-0 top-24 w-full  h-[calc(100vh-96px)] flex flex-col items-center justify-center text-lg gap-9 z-10'>
        <Link href={'/home'}>Home</Link>
        <Link href={'/home'}>Friends</Link>
        <Link href={'/home'}>Groups</Link>
        <Link href={'/home'}>Stories</Link>
        <Link href={'/home'}>Login</Link>
      </div>}
    </div>
  )
}

export default HamburgerMenu
