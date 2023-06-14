import React from "react";
import Synonyms from "./Synonyms";

export default {
  title: "Components/Synonyms",
  component: Synonyms,
};

const synonyms = ["Word1", "Word2", "Word3"];

export const mobile = () => <Synonyms synonyms={synonyms} />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <Synonyms synonyms={synonyms} />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
