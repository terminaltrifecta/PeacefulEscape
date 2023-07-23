import React from "react";
import Link from "next/link";
import moon from "app/assets/moon.svg";
import sun from "app/assets/sun.svg";
import Image from "next/image";


export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <Link className="btn btn-ghost normal-case text-xl" href="/">
        <div className="navbar-center"> PA</div>
      </Link>
      <div className="navbar-end">
        <div className="flex-none">
          {/* Toggle button here */}
          <button className="btn btn-square bg-gray-600 hover:bg-gray-400">
            <label className="swap swap-rotate w-12 h-12 ">
              <input type="checkbox" />
              {/* light theme sun image */}
              <Image src={sun} alt="light" className="text-red-600 w-8 h-8 swap-on" />
              {/* dark theme moon image */}
              <Image src={moon} alt="dark" className="text-red-600 w-8 h-8 swap-off" />
            </label>
          </button>
        </div>
      </div>
    </div>
  );
}
