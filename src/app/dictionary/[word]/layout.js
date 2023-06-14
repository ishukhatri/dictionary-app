"use client";

import "@app/globals.css";
// import { Inter } from "next/font/google";
import Header from "@components/header/Header";

// const inter = Inter({ subsets: ["latin"] });

import { useTheme } from "@hooks/useTheme";

export default function DictionaryPageLayout({ children }) {
  const { isDarkMode, toggleTheme } = useTheme();

  console.log("isDarkMode", isDarkMode);
  console.log("toggleTheme", toggleTheme);

  return (
    <div className={isDarkMode ? "dark bg-black" : ""}>
      <Header />
      {children}
    </div>
  );
}
