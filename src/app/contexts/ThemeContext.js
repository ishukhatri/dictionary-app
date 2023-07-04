"use client";

import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fonts = [
    { value: "font-inter", name: "Sans Serif", default: true },
    { value: "font-lora", name: "Serif", default: false },
    { value: "font-inconsolata", name: "Mono", default: false },
  ];

  const [selectedFont, setSelectedFont] = useState(
    fonts.find((font) => font.default)
  );

  useEffect(() => {
    // Retrieve theme values from storage on component mount
    const storedIsDarkMode = localStorage.getItem("isDarkMode");
    const storedSelectedFont = localStorage.getItem("selectedFont");

    setIsDarkMode(storedIsDarkMode === "true");

    if (storedSelectedFont) {
      setSelectedFont(JSON.parse(storedSelectedFont));
    }
  }, []);

  useEffect(() => {
    // Save theme values to storage whenever they change
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    localStorage.setItem("selectedFont", JSON.stringify(selectedFont));
  }, [isDarkMode, selectedFont]);

  useEffect(() => {
    // Check for system theme preference on component mount
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    // Listen for changes in system theme preference
    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeQuery.addEventListener("change", handleChange);

    return () => {
      darkModeQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const setNewFont = (newFont) => {
    setSelectedFont(fonts.find((font) => newFont === font.value));
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, selectedFont, setNewFont, fonts }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
