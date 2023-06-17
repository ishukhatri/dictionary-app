import React from "react";
import MeaningItem from "./meaningItem/MeaningItem";

const MeaningsList = ({ meanings }) => {
  return (
    <div className="md:mt-11">
      {meanings.map((meaning, index) => (
        <MeaningItem key={index} meaning={meaning} />
      ))}
    </div>
  );
};

export default MeaningsList;
