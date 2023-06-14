"use client";

import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [font, setFont] = useState("font-inconsolata");

  const toggleTheme = () => {
    console.log("called toggle theme");
    setIsDarkMode((prevMode) => !prevMode);
  };

  const setNewFont = (newFont) => {
    console.log("called set font");
    setFont(newFont);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, font, setNewFont }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
