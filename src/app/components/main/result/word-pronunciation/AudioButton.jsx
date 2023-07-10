"use client";

import React, { useState } from "react";
import Image from "next/image";

const AudioButton = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    const audio = new Audio(audioUrl);

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };
  return (
    <div className="h-12 w-12 md:h-[75px] md:w-[75px] relative">
      <Image
        fill="true"
        src="/assets/play-button.svg"
        alt="pronunciation play button"
        onClick={handleClick}
      />
    </div>
  );
};

export default AudioButton;
