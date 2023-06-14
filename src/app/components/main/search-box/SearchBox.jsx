import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function SearchBox() {
  const [searchWord, setSearchWord] = useState("keyboard");

  const router = useRouter();

  const handleSearch = () => {
    if (searchWord) {
      console.log("Search for: ", searchWord);
      router.push(`/dictionary/${searchWord}`);
    }
  };

  return (
    <div className="flex items-center justify-center w-full relative">
      <input
        type="text"
        placeholder="keyboard"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
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
