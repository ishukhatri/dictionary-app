import React from "react";
import Synonym from "./Synonym";

export default {
  title: "Components/Synonym",
  component: Synonym,
};

const synonyms = ["Word1", "Word2", "Word3"];

export const Default = () => <Synonym synonyms={synonyms} />;

export const EmptySynonyms = () => <Synonym synonyms={[]} />;

export const LongList = () => {
  const longList = [
    "Word1",
    "Word2",
    "Word3",
    "Word4",
    "Word5",
    "Word6",
    "Word7",
    "Word8",
    "Word9",
    "Word10",
  ];

  return <Synonym synonyms={longList} />;
};
