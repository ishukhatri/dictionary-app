"use client";

import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fonts = [
    { value: "font-inter", name: "Sans Serif", default: true },
    { value: "font-lora", name: "Serif", default: false },
    { value: "font-inconsolata", name: "Mono", default: false },
  ];

  const defaultFont = fonts.find((font) => font.default);
  const [selectedFont, setSelectedFont] = useState(defaultFont);

  const toggleTheme = () => {
    console.log("called toggle theme");
    setIsDarkMode((prevMode) => !prevMode);
  };

  const setNewFont = (newFont) => {
    console.log("called set font", newFont);
    setSelectedFont(fonts.find((font) => newFont == font.value));
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, selectedFont, setNewFont, fonts }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
