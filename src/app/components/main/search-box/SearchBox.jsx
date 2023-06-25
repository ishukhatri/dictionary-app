import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function SearchBox() {
  const [searchWord, setSearchWord] = useState("");
  const [searchWordEmpty, setSearchWordEmpty] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    console.log("handleKey Search Event:");
    if (searchWord) {
      router.push(`/dictionary/${searchWord}`);
    } else {
      setSearchWordEmpty(true);
    }
  };

  const handleKeyDown = (event) => {
    console.log("handleKey Event:");
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchWord !== "") {
      setSearchWordEmpty(false);
    }
  }, [searchWord]);

  return (
    <div className="flex flex-col font-bold text-base">
      <div className="flex items-center justify-center w-full relative">
        <input
          type="text"
          placeholder="start typing any word..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`${
            searchWordEmpty ? "border border-red-bright border-rad" : ""
          } bg-grey-lighter dark:bg-black-darker border-2 border-gray-300 h-12 md:h-16 w-full px-6 rounded-2xl focus:outline-none 
        text-black-dark leading-5`}
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
      <div
        className={`${searchWordEmpty ? "" : "hidden"} text-red-bright mt-2`}
      >
        Whoops, can’t be empty…
      </div>
    </div>
  );
}

export default SearchBox;
