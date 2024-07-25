import React from 'react'
import SingleStory from './SingleStory'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-md shadow-sm text-sm overflow-scroll scroll-hidden'>
      <div className='flex gap-6 w-max'>
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
        <SingleStory />
      </div>
    </div>
  )
}

export default Stories
