import React from 'react'
import SingleBirthday from './SingleBirthday'
import UpcommingBirthdays from './UpcommingBirthdays'

const Birthdays = () => {
  return (
    <div className='flex flex-col gap-3 p-4 bg-white rounded-lg shadow-md text-sm'>
        <div className='flex flex-col gap-3'>
            <SingleBirthday />
            <SingleBirthday />
        </div> 
        <UpcommingBirthdays /> 
    </div>
  )
}

export default Birthdays
