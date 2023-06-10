import React, { useState } from "react";
import Image from "next/image";

function SearchBox() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Execute your search logic here.
    // It might involve calling an API with the query or filtering an array.
    console.log("Search for: ", query);
  };

  return (
    <div className="flex items-center justify-center w-full relative">
      <input
        type="text"
        placeholder="keyword"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-grey-lighter border-2 border-gray-300 h-12 md:h-16 w-full px-6 rounded-2xl focus:outline-none
        text-black-dark font-bold text-base leading-5"
      />
      <button
        onClick={handleSearch}
        className="absolute right-0 top-0 flex items-center justify-center mr-4 mt-4 md:mr-6 md:mt-6"
      >
        <Image
          src="/assets/search-icon.svg"
          height={16}
          width={16}
          alt="logo"
        />
      </button>
    </div>
  );
}

export default SearchBox;
