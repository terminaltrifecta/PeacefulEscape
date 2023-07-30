import React, { useEffect, useState } from "react";
import Link from "next/link";
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
    <div className="p-0 navbar sticky top-0 bg-primary z-50 text-white">
      <div className="w-1/3 justify-start">
        <Link href="/">
          <img
            alt=""
            src="/assets/peaceful.png"
            className=" p-0 btn btn-ghost h-16 pl-2"
          />
        </Link>
      </div>
      <div className="gap-2 w-2/3 justify-end">
        <div className="grid">
          <Searchbar setResults={setResults} />
          <Searchresultslist results={results} />
        </div>
        <button className="btn btn-ghost btn-square ">
          <label className="swap swap-rotate w-12 h-12 ">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <SunIcon className="text-white w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <MoonIcon className="text-white w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
