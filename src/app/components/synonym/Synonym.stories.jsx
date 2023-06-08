import React from "react";
import Synonym from "./Synonym";

export default {
  title: "Components/Synonym",
  component: Synonym,
};

const synonyms = ["Word1", "Word2", "Word3"];

export const mobile = () => <Synonym synonyms={synonyms} />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <Synonym synonyms={synonyms} />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
