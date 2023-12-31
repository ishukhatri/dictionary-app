"use client";

import { Switch } from "@headlessui/react";
import { useTheme } from "@hooks/useTheme";
import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/20/solid";

export default function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      className={`${isDarkMode ? "bg-purple-bright" : "bg-grey-dark"}
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 
          border-transparent transition-colors duration-200 ease-in-out focus:outline-none 
          focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <SunIcon className="absolute top-0 left-0 h-[15px] w-[15px] opacity-50" />
      <MoonIcon className="absolute top-0 right-0 h-[15px] w-[15px] opacity-50" />
      <span
        aria-hidden="true"
        className={`${isDarkMode ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full 
            bg-white shadow-lg ring-0 transition duration-200 ease-in-out z-5`}
      >
        {isDarkMode ? (
          <MoonIcon className="z-10" />
        ) : (
          <SunIcon className="z-10" />
        )}
      </span>
    </Switch>
  );
}
