"use client";

import "@app/globals.css";
import Header from "@components/header/Header";

import { useTheme } from "@hooks/useTheme";
import SearchBox from "@/app/components/main/search-box/SearchBox";

export default function DictionaryPageLayout({ children }) {
  const { isDarkMode, font } = useTheme();

  return (
    <div
      className={`${isDarkMode ? "dark bg-black " : "bg-white"} ${font} p-6`}
    >
      <div className="pb-6">
        <Header />
      </div>
      <div className="pb-6">
        <SearchBox />
      </div>
      <div className="pb-6">{children}</div>
    </div>
  );
}
