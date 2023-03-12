import React from 'react'
import ItemRow from './ItemRow'

const Categories = () => {

  return (
    <div className='w-[10rem] h-auto font-bold flex flex-col  items-center text-[1.5rem]'>
        <p className='sticky top-[5rem] bg-white p-[1rem]'>Categories</p>
        <ItemRow key={1} className="mt-[.5px]" /> 
    </div>
  )
}

export default Categories