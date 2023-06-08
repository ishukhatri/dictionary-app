import React from "react";

const Synonym = ({ synonyms }) => {
  return (
    <div className="flex flex-wrap text-base md:text-xl">
      <p className="text-grey-dark font-normal leading-5 mr-6">Synonyms</p>
      {synonyms.map((synonym, index) => (
        <p
          className="text-purple-bright font-bold whitespace-nowrap leading-5"
          key={index}
        >
          {synonym}
          {index !== synonyms.length - 1 && ", "}{" "}
          {/* Add comma if not the last item */}
        </p>
      ))}
    </div>
  );
};

export default Synonym;
