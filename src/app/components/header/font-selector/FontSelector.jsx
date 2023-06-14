"use client";

import React from "react";
import { useTheme } from "@hooks/useTheme";

const FontSelector = () => {
  const { currentFont, handleFontChange } = useTheme();

  const handleChange = (event) => {
    const selectedFont = event.target.value;
    handleFontChange(selectedFont);
  };

  return (
    <div>
      <select
        className="border-0 font-bold text-sm text-black-dark text-right leading-6 p-1 mr-4"
        value={currentFont}
        onChange={handleChange}
      >
        <option value="0">Sans Serif</option>
        <option value="1">Serif</option>
        <option value="2">Mono</option>
      </select>
    </div>
  );
};

export default FontSelector;
