import React from "react";
import Image from "next/image";

const DefinitionSource = ({ link }) => {
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0 text-sm font-normal leading-4">
      <p className="text-grey-dark  dark:border-grey-dark">Source</p>
      <div className="flex items-center text-black-dark">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white text-black-dark underline"
        >
          {link}
        </a>
        <Image
          src="/assets/new-window.svg"
          width={12}
          height={12}
          className="w-3 h-3 ml-2"
        />
      </div>
    </div>
  );
};

export default DefinitionSource;
