import React from "react";
import AudioButton from "./AudioButton";

const WordP11n = ({ word, phonetic, audioUrl }) => {
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
      {audioUrl && <AudioButton audioUrl={audioUrl} />}
    </div>
  );
};

export default WordP11n;
