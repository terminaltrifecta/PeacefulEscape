import React, { useEffect, useState } from "react";
import Link from "next/link";
import Searchbar from "../searchbar/searchbar";
import Searchresultslist from "../searchbar/searchresultslist";
import Image from "next/image";

const Navbar = () => {

  const [results, setResults] = useState([]);

  return (
    <div className="p-0 navbar sticky top-0 bg-primary z-50 text-white">
      <div className="w-1/3 justify-start">
        <Link href="/">
          <Image
            alt=""
            src="/assets/peaceful.png"
            className=" p-0 btn btn-ghost h-16 pl-2"
            width="140"
            height="100"
          />
        </Link>
      </div>
      <div className="gap-2 w-2/3 justify-end">
        <div className="grid pr-4">
          <Searchbar setResults={setResults} />
          <Searchresultslist results={results} />
        </div> 
      </div>
    </div>
  );
};

export default Navbar;
