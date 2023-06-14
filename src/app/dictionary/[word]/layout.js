"use client";

import "@app/globals.css";
import { Inconsolata, Inter, Lora } from "@app/fonts";
// import { Inter } from "next/font/google";
import Header from "@components/header/Header";

// const inter = Inter({ subsets: ["latin"] });

import { useTheme } from "@hooks/useTheme";
import SearchBox from "@/app/components/main/search-box/SearchBox";

export default function DictionaryPageLayout({ children }) {
  const { isDarkMode, font } = useTheme();

  return (
    <div className={`${isDarkMode ? "dark bg-black font-lora" : ""} ${font}`}>
      <Header />
      <SearchBox />
      {children}
    </div>
  );
}
