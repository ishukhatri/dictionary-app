import React from "react";

const PartOfSpeech = ({ pos }) => {
  return (
    <section className="flex flex-row items-center">
      <h2 className="text-black-dark dark:text-white font-bold text-lg md:text-2xl leading-4 italic mr-4 md:mr-5">
        {pos}
      </h2>
      <hr className="border-t border-grey-light flex-grow dark:border-black-medium" />
    </section>
  );
};

export default PartOfSpeech;
