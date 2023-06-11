import MeaningItem from "./MeaningItem"; // Import your Toggle component

export default {
  title: "Components/MeaningItem",
  component: MeaningItem,
};

const meaning = {
  partOfSpeech: "verb",
  definitions: [
    {
      definition: "To type on a computer keyboard.",
      synonyms: [],
      antonyms: [],
      example: "Keyboarding is the part of this job I hate the most.",
    },
  ],
  synonyms: ["hello luiya", "baomihua"],
  antonyms: [],
};

export const mobile = () => <MeaningItem meaning={meaning} />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <MeaningItem meaning={meaning} />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
