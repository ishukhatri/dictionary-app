import React, { useState } from "react";
import search_icon from "../assets/search-icon.svg";

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
        className="bg-grey-lighter border-2 border-gray-300 h-12 w-full px-6 rounded-2xl focus:outline-none
        text-black-dark font-bold text-base leading-5"
      />
      <button
        onClick={handleSearch}
        className="absolute right-0 top-0 mr-4 mt-4"
      >
        <img className="w-4 h-4" src={search_icon} alt="logo"></img>
      </button>
    </div>
  );
}

export default SearchBox;
