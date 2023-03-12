import React from 'react'
import {BiCart} from 'react-icons/bi';
import { useStateValue } from './context/stateProvider';

const Cart = () => {
  const [{cart,showCart},dispatch]=useStateValue()
  return (
    <div onClick={()=>{
      dispatch({
        type:"SET_SHOW_CART",
        showCart:!showCart
      })
    }} className='flex bg-green-700 items-center px-[15px] py-[5px] rounded-md text-[15px] text-white'>
        <BiCart className='text-[1.75rem] mr-[10px]'/>
        <div className='font-[700]'>
            <p>{cart.length} items</p>
            <p>00</p>

        </div>
    </div>
  )
}

export default Cart