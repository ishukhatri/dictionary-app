import { Switch } from "@headlessui/react";
// import { useTheme } from "@/app/hooks/useTheme";
import { useTheme } from "../../hooks/useTheme";

export default function Toggle() {
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
      <span
        aria-hidden="true"
        className={`${isDarkMode ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full 
            bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}