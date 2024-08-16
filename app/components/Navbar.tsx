'use client';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Link from 'next/link';
import { CiShoppingCart } from 'react-icons/ci';

type Props = {};

const Navbar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between py-4 relative">
      <div className="flex items-center md:space-x-10 lg:space-x-20">
        <div className="font-semibold text-2xl">
          <a href="/">ZhakeX</a>
        </div>
        <nav className="max-md:hidden">
          <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
            <li>
              <a href="/" className="py-3 inline-block w-full">
                Shop
              </a>
            </li>
            <li>
              <a href="filters" className="py-3 inline-block w-full">
                Filters
              </a>
            </li>
            <li>
              <a href="myproducts" className="py-3 inline-block w-full">
                My Products
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <SearchBar />
        <div
          onClick={() => setShowProfile(!showProfile)}
          className="relative cursor-pointer"
        >
          <img
            src="user.jpg"
            className="w-[35px] h-[35px] rounded-full object-cover"
            alt=""
          />
          <div
            className={`absolute bg-white z-[2] rounded-lg shadow-lg ${
              showProfile ? '' : 'hidden'
            }`}
          >
            <Link href="/sign">SignIn</Link>
          </div>
        </div>
        <Link href="/cart">
          <div className="p-2 bg-gray-100 rounded-full">
            <CiShoppingCart size={20} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
