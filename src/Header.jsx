import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import Login from "./Login";
import Search from "./Search";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="p-[.75rem] top-0 sticky z-10 bg-white flex items-center border-b-2">
      <div className="flex w-[60%] items-center justify-between">
        <div className="text-[2.5rem] tracking-tighter font-extrabold px-[1rem] border-r-2 text-yellow-400">
          blink<span className="text-green-600">it</span>
        </div>
        <Search />
      </div>
      <div className="flex w-[40%] items-center justify-end">
        <Login />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
