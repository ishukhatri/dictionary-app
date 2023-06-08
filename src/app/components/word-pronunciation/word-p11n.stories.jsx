import React from "react";
import WordP11n from "./word-p11n";

export default {
  title: "Components/Word Pronunciation",
  component: WordP11n,
};

export const mobile = () => (
  <WordP11n phonetic={"/ˈkiːbɔːd/"} word={"Keyboard"} />
);
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => (
  <WordP11n phonetic={"/ˈkiːbɔːd/"} word={"Keyboard"} />
);
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
