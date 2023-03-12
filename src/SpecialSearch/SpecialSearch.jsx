import React from 'react'
import Search from '../Search'

const SpecialSearch = () => {
  return (
   
        <div className='w-full font-bold flex flex-col py-[.5rem] items-center text-[2rem]'>
            <p>Add all items of a dish in 1 click! </p>
            <Search/>
        </div>
  )
}

export default SpecialSearch