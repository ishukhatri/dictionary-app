import React from "react";
import Image from "next/image";

const DefinitionSource = ({ link }) => {
  return (
    <div className="text-sm font-normal leading-4 underline">
      <p className="text-grey-dark leading-[17px] border-grey-dark dark:border-grey-dark">
        Source
      </p>
      <div className="mt-2 flex items-center text-black-dark">
        <p className="dark:text-white text-black-dark">{link}</p>
        <Image
          src="/assets/new-window.svg"
          width={12}
          height={12}
          className="w-3 h-3 ml-[9px]"
        />
      </div>
    </div>
  );
};

export default DefinitionSource;
