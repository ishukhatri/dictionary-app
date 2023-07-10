import React from "react";

const SingleDefinition = ({ definition, example }) => {
  return (
    <div className="relative">
      <div className="absolute w-1 h-1 left-0 top-2.5 bg-purple-bright rounded-full"></div>
      <div className="pl-6 font-normal text-base md:text-lg leading-6">
        <p className="  text-black-dark dark:text-white">{definition}</p>
        {/* Example */}
        {example && (
          <p className="text-grey-dark mt-3">&quot;{example}&quot;</p>
        )}
      </div>
    </div>
  );
};

export default SingleDefinition;
