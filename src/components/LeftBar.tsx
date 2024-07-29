import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import Ads from './Ads'

const LeftBar = ({type} : {type :string}) => {
  return (
    <div className='flex flex-col gap-4'>
      {type == 'home' && <ProfileCard />}
      <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/posts.png'} alt='' width={20} height={20} />
          <span>My Posts</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/activity.png'} alt='' width={20} height={20} />
          <span>Activity</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/market.png'} alt='' width={20} height={20} />
          <span>Marketplace</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/events.png'} alt='' width={20} height={20} />
          <span>Events</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/albums.png'} alt='' width={20} height={20} />
          <span>Albums</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/videos.png'} alt='' width={20} height={20} />
          <span>videos</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/news.png'} alt='' width={20} height={20} />
          <span>News</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/courses.png'} alt='' width={20} height={20} />
          <span>Courses</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/lists.png'} alt='' width={20} height={20} />
          <span>Lists</span>
        </Link>
        <Link href={'/'} className='flex items-center gap-3 p-2 rounded-md hover:bg-slate-100'>
          <Image src={'/settings.png'} alt='' width={20} height={20} />
          <span>Settings</span>
        </Link>
      </div>
      <div className=''>
        <Ads size='sm' />
      </div>
    </div>
  )
}

export default LeftBar
