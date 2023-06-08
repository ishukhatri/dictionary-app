import React from "react";

const MeaningItem = ({ meaning, example }) => {
  return (
    <div className="relative">
      <div className="absolute w-[5px] h-[5px] left-0 top-[10px] bg-purple-bright rounded-full"></div>
      <div className="pl-6 font-normal text-[15px] leading-6">
        <p className="  text-black-dark dark:text-white">
          {/* (etc.) A set of keys used to operate a typewriter, computer etc. */}
          {meaning}
        </p>
        {/* Example */}
        {example && (
          <p className="text-grey-dark mt-[13px]">
            {example}
            {/* Keyboarding is the part of this job I hate the most. */}
          </p>
        )}
      </div>
    </div>
  );
};

export default MeaningItem;
