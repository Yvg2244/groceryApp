import React from 'react'
import {BiSearch} from 'react-icons/bi'
const Search = () => {
  return (
    <div className='w-[30rem] bg-gray-100 h-[3rem] items-center tracking-widest flex p-[.5rem] border-2 rounded-xl'>
        <BiSearch className='text-[1.75rem] mx-[.5rem] text-gray-800'/>
        <input className='w-full bg-gray-100' type="text" placeholder='Search'></input>
    </div>
  )
}

export default Search