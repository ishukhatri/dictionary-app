import React from "react";
import Image from "next/image";

const WordP11n = ({ word, phonetic }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <div className="text-black-dark dark:text-white font-bold text-3xl md:text-6xl">
          {word}
        </div>
        <div className="text-purple-bright font-normal text-lg md:text-2xl md:mt-2">
          {phonetic}
        </div>
      </div>
      <div className="h-12 w-12 md:h-[75px] md:w-[75px] relative">
        <Image
          fill="true"
          src="/assets/play-button.svg"
          alt="pronunciation play button"
        />
      </div>
    </div>
  );
};

export default WordP11n;
