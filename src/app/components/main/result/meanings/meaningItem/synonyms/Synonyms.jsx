import React from "react";

const Synonyms = ({ synonyms }) => {
  return (
    <div className="flex flex-wrap text-base md:text-xl leading-normal">
      <p className="text-grey-dark font-normal mr-6">Synonyms</p>
      {synonyms.map((synonym, index) => (
        <p className="text-purple-bright font-bold mr-2" key={index}>
          {synonym}
          {index !== synonyms.length - 1 && ", "}{" "}
          {/* Add comma if not the last item */}
        </p>
      ))}
    </div>
  );
};

export default Synonyms;
