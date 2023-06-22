import Logo from "@/assets/pricetracker-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="fixed top-0 z-30 flex w-full items-center justify-between py-5">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            <img className="h-9" src={Logo} alt="logo" />
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-between gap-8 text-sm">
                <Link className="text-xl font-medium transition duration-500 hover:text-emerald-600" to='/'>Home</Link>
                <Link className="text-xl font-medium transition duration-500 hover:text-emerald-600" to='/about'>About us</Link>
                <Link className="text-xl font-medium transition duration-500 hover:text-emerald-600" to='/catalog'>Catalogue</Link>
              </div>
              <div className="flex items-center justify-between gap-8">
                <Link className="text-xl font-semibold" to='/login'>Sign In</Link >
                <Link className="text-xl font-semibold" to='/register'><button>Become a Member</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
