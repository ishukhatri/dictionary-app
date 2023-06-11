import React from "react";
import PartOfSpeech from "./part-of-speech/PartOfSpeech";
import DefinitionsList from "./definitions/DefinitionsList";
import Synonyms from "./synonyms/Synonyms";

const MeaningItem = ({ meaning }) => {
  return (
    <div>
      <div>
        <PartOfSpeech pos={meaning.partOfSpeech}></PartOfSpeech>
      </div>
      <div className="mt-8 md:mt-10">
        <DefinitionsList definitions={meaning.definitions}></DefinitionsList>
      </div>
      {meaning.synonyms.length > 0 && (
        <div className="mt-6 mb-8 md:mt-10">
          <Synonyms synonyms={meaning.synonyms}></Synonyms>
        </div>
      )}
    </div>
  );
};

export default MeaningItem;
