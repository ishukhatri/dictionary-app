import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Header from "@components/header/Header";
import WordP11n from "@components/word-pronunciation/word-p11n";
import MeaningsList from "@components/meanings/MeaningsList";
import SearchBox from "@components/search-box/SearchBox";
import DefinitionSource from "@components/definition-source/DefinitionSource";
import { ThemeProvider } from "@contexts/ThemeContext";

const WordPage = () => {
  const router = useRouter();
  const { word } = router.query;
  const [wordData, setWordData] = useState(null);
  console.log("word in effect is :", word);
  useEffect(() => {
    const fetchWordData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await response.json();
        console.log("word data:" + data);
        setWordData(data[0]);
      } catch (error) {
        console.error("Error fetching word data:", error);
      }
    };

    console.log("word in effect is :", word);
    if (word) {
      fetchWordData();
    }
  }, [word]);

  return (
    <ThemeProvider theme="default">
      <div>
        <Header />
        <SearchBox />
        {/* console.log(wordData); */}
        <WordP11n word={word} phonetic={wordData?.phonetic} />
        {wordData && <MeaningsList meanings={wordData?.meanings} />}
        <DefinitionSource link={wordData?.sourceUrls[0]} />
      </div>
    </ThemeProvider>
  );
};

export default WordPage;
