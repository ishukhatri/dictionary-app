import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import WordP11n from "../components/word-pronunciation/word-p11n";
import MeaningsList from "../components/meanings/MeaningsList";
import SearchBox from "../components/search-box/SearchBox";
import DefinitionSource from "../components/definition-source/DefinitionSource";

const WordPage = () => {
  const router = useRouter();
  const { word } = router.query;
  const [wordData, setWordData] = useState(null);

  useEffect(() => {
    const fetchWordData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();
        setWordData(data[0]);
      } catch (error) {
        console.error("Error fetching word data:", error);
      }
    };

    if (word) {
      fetchWordData();
    }
  }, [word]);

  return (
    <div>
      <Header />
      <SearchBox />
      <WordP11n word={word} phonetic={wordData.phonetics} />
      {wordData && <MeaningsList meanings={wordData.meanings} />}
      <DefinitionSource link={wordData.sourceUrls[0]} />
    </div>
  );
};

export default WordPage;
