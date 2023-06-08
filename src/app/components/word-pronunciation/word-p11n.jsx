import React from "react";
import Image from "next/image";

const WordP11n = ({ word, phonetic }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <div className="text-black-dark dark:text-white font-bold text-[32px]">
          {word}
        </div>
        <div className="text-purple-bright font-normal text-lg ">
          {phonetic}
        </div>
      </div>
      <div>
        <Image
          width={48}
          height={48}
          src="/assets/play-button.svg"
          alt="pronunciation play button"
        />
      </div>
    </div>
  );
};

export default WordP11n;
