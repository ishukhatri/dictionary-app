import React from "react";
import Image from "next/image";
import FontSelector from "./font-selector/FontSelector";
import DarkModeToggle from "./dark-mode-toggle/DarkModeToggle";

const Header = () => {
  return (
    <header className="header flex flex-row justify-between items-center">
      <div>
        <Image src="/assets/logo.svg" height={36} width={36} alt="logo" />
      </div>
      <div className="flex justify-center items-center">
        <div className="mr-7">
          <FontSelector />
        </div>
        <div className="flex border-l border-black-darkest dark:border-grey-light px-4 md:px-6 items-center">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
