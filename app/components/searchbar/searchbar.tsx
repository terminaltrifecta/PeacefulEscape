import React, { useState } from "react";

export default function Searchbar({setResults}:any) {
  const [input, setInput] = useState("");

  const fetchData = (value: any) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: any) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
        console.log(results);
      });
  };

  const handleChange = (value: any) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <input
      placeholder="Type here"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      type="text"
      className="searchbar input input-ghost input-bordered w-full max-w-xs"
    />
  );
}
