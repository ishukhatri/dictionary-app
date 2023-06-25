"use client";

import "@app/globals.css";
import Header from "@components/header/Header";

import { useTheme } from "@hooks/useTheme";
import SearchBox from "@/app/components/main/search-box/SearchBox";

export default function DictionaryPageLayout({ children }) {
  const { isDarkMode, selectedFont } = useTheme();

  return (
    <div
      className={`${isDarkMode ? "dark bg-black " : "bg-white"} ${
        selectedFont.value
      } p-6`}
    >
      <div
        className="max-w-3xl mx-auto
      "
      >
        <div className="pb-6">
          <Header />
        </div>
        <div className="pb-6">
          <SearchBox />
        </div>
        <div className="pb-6">{children}</div>
      </div>
    </div>
  );
}
