import React from "react";
import WordP11n from "./word-pronunciation/word-p11n";
import MeaningsList from "./meanings/MeaningsList";
import DefinitionSource from "./definition-source/DefinitionSource";

async function getData(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    console.log("word data:" + JSON.stringify(data));
    return data[0];
  } catch (error) {
    console.error("Error fetching word data:", error);
  }
}

const Result = async ({ word }) => {
  console.log("dictionary entry is to be shown for :", word);

  const data = await getData(word);
  return (
    <div>
      {data && (
        <>
          <WordP11n word={data.word} phonetic={data.phonetic} />
          <MeaningsList meanings={data.meanings} />
          <DefinitionSource link={data.sourceUrls[0]} />
        </>
      )}
    </div>
  );
};

export default Result;
