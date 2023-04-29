import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black py-4">
      <div className="flex justify-between items-center pl-4 w-[90%] m-auto">
        <div>
          <img className="w-20" src={logo} alt="logo" />
        </div>

        <div className={ nav ? "absolute top-[6%] right-0 p-4 font-semibold text-2xl bg-red-800 " : 'hidden md:flex text-white'}>
          <p className="p-4">Home</p>
          <p className="p-4">What is GPT3?</p>
          <p className="p-4">Open AI</p>
          <p className="p-4">Case Studies</p>
          <p className="p-4">Library</p>
        </div>

        <div className="hidden sm:flex gap-5">
          <p className="bg-white p-2 rounded">Sign in</p>
          <button className="bg-red-500 p-2 rounded">Sign up</button>
        </div>

        <div className="text-2xl p-4 text-white md:hidden" onClick={toggle}>
          {nav ? <RiCloseLine />  :<RiMenu3Line />}
        </div>
      </div>
    </div>
  );
}
