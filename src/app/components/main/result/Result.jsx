import React from "react";
import WordP11n from "./word-pronunciation/word-p11n";
import MeaningsList from "./meanings/MeaningsList";
import DefinitionSource from "./definition-source/DefinitionSource";
import Divider from "./common/Divider";
import { notFound } from "next/navigation";

async function getData(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    return undefined;
  }
}

function findFirstNonEmptyValue(obj, field) {
  const search = (data) => {
    if (data === null || typeof data !== "object") {
      return null;
    }

    if (data[field] !== undefined && data[field] !== "") {
      return data[field];
    }

    const values = Object.values(data);
    for (const value of values) {
      const result = search(value);
      if (result !== null) {
        return result;
      }
    }

    return null;
  };

  return search(obj);
}

const Result = async ({ word }) => {
  const data = await getData(word);
  if (!data) {
    notFound();
  }
  return (
    <div>
      {data && (
        <>
          <WordP11n
            word={data.word}
            phonetic={data.phonetic}
            audioUrl={findFirstNonEmptyValue(data, "audio")}
          />
          <MeaningsList meanings={data.meanings} />
          <div className="md:my-11 my-8">
            <Divider />
          </div>
          <DefinitionSource link={data.sourceUrls[0]} />
        </>
      )}
    </div>
  );
};

export default Result;
