import React, { useState } from "react";

export default function Searchbar({ setResults }: any) {
  const [input, setInput] = useState("");

  const properties = [
    {
      id: 1,
      name: "Exotic Mediterranean Oasis",
      location: "Southfield, Michigan",
      href: "/southfield",
      image: "/assets/coverimages/southfield.jpg",
    },
    {
      id: 2,
      name: "Modern Spacious Loft",
      location: "Roseville, Michigan",
      href: "/roseville",
      image: "/assets/coverimages/rosevilleloft.webp",
    },
    {
      id: 3,
      name: "Cheerful Bedroom in a Cozy Home",
      location: "Warren, Michigan",
      href: "/warrenwest",
      image: "/assets/coverimages/warrenwest.webp",
    },
    {
      id: 4,
      name: "Comfortable Home in a Quiet Neighborhood",
      location: "Warren, Michigan",
      href: "/warreneast",
      image: "/assets/coverimages/warreneast.webp",
    },
    {
      id: 5,
      name: "Sunny, Stylish, Private Apartment in the City",
      location: "Roseville, Michigan",
      href: "/rosevilleaprt",
      image: "/assets/coverimages/rosevilleaprt.webp",
    },
  ];

  const fetchData = (value: any) => {
    const results = properties.filter((location: any) => {
      return (
        value &&
        location &&
        location.name &&
        (location.name.toLowerCase().includes(value.toLowerCase()) ||
          location.location.toLowerCase().includes(value.toLowerCase()))
      );
    });
    setResults(results);
  };

  const handleChange = (value: any) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <input
      placeholder="Enter a location..."
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      type="text"
      className="searchbar input input-ghost input-secondary input-bordered w-full max-w-xs"
    />
  );
}
