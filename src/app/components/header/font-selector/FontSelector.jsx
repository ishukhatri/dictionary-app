"use client";

import React from "react";
import { useTheme } from "@hooks/useTheme";

const FontSelector = () => {
  const { currentFont, setNewFont } = useTheme();

  const handleChange = (event) => {
    const selectedFont = event.target.value;
    setNewFont(selectedFont);
  };

  return (
    <div>
      <select
        className="border-0 font-bold text-sm text-black-dark text-right leading-6 p-1 mr-4"
        value={currentFont}
        onChange={handleChange}
      >
        <option value="font-inter">Sans Serif</option>
        <option value="font-lora">Serif</option>
        <option value="font-inconsolata">Mono</option>
      </select>
    </div>
  );
};

export default FontSelector;
