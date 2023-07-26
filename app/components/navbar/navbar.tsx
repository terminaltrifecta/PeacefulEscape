import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { json } from "stream/consumers";
import Searchbar from "../searchbar/searchbar";
import Searchresultslist from "../searchbar/searchresultslist";

const Navbar = () => {
  // set it to the theme in storage if available, otherwise light
  const localTheme =
    typeof window !== "undefined"
      ? window.localStorage.getItem("theme")
      : false;

  const [theme, setTheme] = useState(localTheme ? localTheme : "light");

  //update state on toggle
  const handleToggle = (e: any) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    const doc = document.querySelector("html") as HTMLElement;
    doc.setAttribute("data-theme", theme as string);
  };

  const [results, setResults] = useState([]);

  return (
    <div className="navbar sticky top-0 z-50 bg-primary text-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
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
        <div className="flex">
          <div className="grid">
            <Searchbar setResults={setResults} />
            <Searchresultslist results={results}/>
          </div>
          {/* Toggle button here */}
          <button className="btn btn-ghost btn-square">
            <label className="swap swap-rotate w-12 h-12 ">
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "light" ? false : true}
              />
              {/* light theme sun image */}
              <SunIcon className="text-base-accent w-8 h-8 swap-on" />
              {/* dark theme moon image */}
              <MoonIcon className="text-base-accent w-8 h-8 swap-off" />
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
