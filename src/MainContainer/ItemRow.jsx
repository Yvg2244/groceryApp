import React, { useState, useEffect } from "react";
import { GiChipsBag } from "react-icons/gi";
import { useStateValue } from "../context/stateProvider";
import products from "../database";
import CategoryItem from "./CategoryItem";

const ItemRow = () => {
  const [{userCategory},dispatch]=useStateValue()
  const categoryArr = [];
  // const [selectedCategory, setSelectedCategory] = useState("");
  for (var category in products) {
    categoryArr.push(category);
  }

  return (
    
      <div className="flex gap-[.5rem] w-full text-[1rem] overflow-auto justify-center flex-wrap mx-[1rem]">
        {categoryArr.map((item) => {
          return (
            <div key={item.id}
              onClick={() => {
                dispatch({
                  type:"SET_USER_CATEGORY",
                  userCategory:item
                })
              }}
              className="flex flex-col gap-[.25rem]  w-[8rem] py-[.5rem] items-center"
            >
              <GiChipsBag key={item.id} className="text-[4rem] text-green-700 aspect-square" />
              <p key={item.id}>{item}</p>
              
            </div>
          );
        })}
     
      </div>
    
  );
};

export default ItemRow;
