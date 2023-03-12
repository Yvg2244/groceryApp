import React from "react";
import products from "../database";
import { useStateValue } from "../context/stateProvider";

const CategoryItem = () => {
  const [{ userCategory, cart }, dispatch] = useStateValue();
  localStorage.setItem("cart", JSON.stringify(cart));
  return (
    <>
      <div className="flex gap-[1rem] w-full text-[1rem] flex-wrap overflow-auto justify-start mx-[2rem]">
        {products[userCategory]?.map((item) => {
          return (
            <div
            key={item.id}
              onClick={() => {

                dispatch({
                  type: "SET_CART",
                  cart: [...cart, item],
                });
                
              }}
              className="flex flex-col gap-[.5rem] px-[.5rem] border-blue-600 w-[8rem] border-2 py-[1rem] items-center"
            >
              <p>{item.Name}</p>
              <div>ADD to Cart</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryItem;
