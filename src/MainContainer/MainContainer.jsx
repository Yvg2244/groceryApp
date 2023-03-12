import React from 'react'
import CheckoutCart from '../CheckoutCart'
import { useStateValue } from '../context/stateProvider'
import SpecialSearch from '../SpecialSearch/SpecialSearch'
import Categories from './Categories'
import CategoryItem from './CategoryItem'

const MainContainer = () => {
  const [{showCart},dispatch]=useStateValue()
  return (
    <div className='flex '>
        {/* <SpecialSearch/> */}
        <Categories/>
        <CategoryItem/>
        {showCart&&<CheckoutCart/>}
    </div>
  )
}

export default MainContainer