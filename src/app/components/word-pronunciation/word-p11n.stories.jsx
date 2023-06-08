import React from "react";
import WordP11n from "./word-p11n";

export default {
  title: "Components/Word Pronunciation",
  component: WordP11n,
};

export const Keyboard = () => (
  <WordP11n phonetic={"/ˈkiːbɔːd/"} word={"Keyboard"} />
);

export const KeyboardDarkMode = () => (
  <div className="dark bg-black">
    <WordP11n phonetic={"/ˈkiːbɔːd/"} word={"Keyboard"} />
  </div>
);
