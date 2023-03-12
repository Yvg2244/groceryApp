import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { useStateValue } from "./context/stateProvider";

const CheckoutCart = () => {
  const [{ cart, showCart }, dispatch] = useStateValue();
  const [updatedCart, setUpdatedCart] = useState([]);
  const cartDispatch = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "SET_CART",
      cart: updatedCart,
    });
  };

const updateAddCart=(id)=>{
    cart.map((items)=>{
      if(items.id==id)
      {
        items.quantity+=1
      }
    })
    cartDispatch()
}
const updateRemoveCart=(item)=>{
  
}

  return (
    <div className="border-black  bg-gray-200 flex flex-col top-0 right-0 gap-2 absolute z-30 border-2 w-[25rem] h-[100vh] ">
      <div className="w-full tracking-wide font-bold text-[1.5rem] bg-white p-[.75rem] flex justify-between">
        <p className="">My Cart</p>
        <p
          onClick={() => {
            console.log(showCart);
            dispatch({
              type: "SET_SHOW_CART",
              showCart: !showCart,
            });
          }}
        >
          x
        </p>
      </div>

      <div className="bg-white  gap-[.25rem] text-[15px] flex flex-col">
        <div className="border-b-2 p-[.75rem] w-full">
          <p className="font-bold">Delivery in 10 minutes</p>
          <p className="">{cart.length} items</p>
        </div>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => {
              return (
                <div className="w-full p-[.75rem] flex flex-col gap-3">
                  <p>{item.Name}</p>
                  <p className="font-semibold">
                    {item.Weight} {item.Unit}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold">₹{item.SP}</p>
                    <div className="w-[5rem] text-white rounded-md bg-green-700 p-[.5rem] flex justify-evenly">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          updateRemoveCart(item);
                        }}
                      >
                        -
                      </div>
                      <div>1</div>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          updateAddCart(item.id);
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>empty</p>
        )}
      </div>

      <div className="w-full p-[.5rem] bg-white text-white">
        <div className="bg-green-700 p-[.5rem] rounded-md flex justify-between items-center">
          <div className="w-auto gap-4 flex justify-between">
            <div>{cart.length} item</div>
            <div>₹1000</div>
          </div>
          <div className="flex w-auto text-right">Proceed </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
