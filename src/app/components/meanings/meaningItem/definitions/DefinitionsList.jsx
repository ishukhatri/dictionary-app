import React from "react";
import SingleDefinition from "./single-definition/SingleDefinition";

const DefinitionsList = ({ definitions }) => {
  return (
    <div className="mt-8">
      <div className="text-grey-dark font-normal text-base leading-[19px] md:text-xl">
        Meaning
      </div>
      <div className="mt-4 md:mt-7 md:ml-6">
        <ul className="flex flex-col list-none space-y-3">
          {definitions.map((definition, index) => (
            <li key={index}>
              <SingleDefinition
                definition={definition.definition}
                example={definition.example}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DefinitionsList;
