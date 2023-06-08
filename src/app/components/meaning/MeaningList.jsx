import React from "react";

const Meaning = ({ meanings }) => {
  return (
    <div className="mt-8">
      <div className="text-grey-dark font-normal text-base leading-[19px]">
        Meaning
      </div>
      <div className="mt-4">
        <ul className="flex flex-col list-none space-y-3">
          {meanings.map((meaning, index) => (
            <li key={index}>
              <MeaningItem meaning={meaning} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Meaning;
