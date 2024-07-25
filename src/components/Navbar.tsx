import HamburgerMenu from './HamburgerMenu'
import Link from 'next/link'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import LoadingSpinner from './LoadingSpinner'

const Navbar = () => {
  return (
    <div className='h-24 flex justify-between items-center px-1'>
      <div className='md:hidden lg:block w-[20%]'>
        <Link href={'/'} className='font-extrabold text-blue-500 text-xl'>My App</Link>
      </div>
      <div className='hidden md:flex w-[50%] justify-between'>
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
        <div className='hidden xl:flex p-2 bg-slate-50 items-center rounded-md'>
          <input type='search' placeholder='search' className='bg-transparent outline-none'/>
          <Image src={'/search.png'} width={16} height={16} alt=''/>
        </div>
      </div>
      <div className='w-[30%] flex items-center justify-end gap-4'>
        <ClerkLoading>
          <LoadingSpinner />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
           <div className='hidden md:flex gap-4'>
           <div className='cursor-pointer'>
              <Image src={'/people.png'} alt='' width={20} height={20} />
            </div>
            <div className='cursor-pointer'>
              <Image src={'/messages.png'} alt='' width={20} height={20} />
            </div>
            <div className='cursor-pointer'>
              <Image src={'/notifications.png'} alt='' width={20} height={20} />
            </div>
           </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/people.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default Navbar
