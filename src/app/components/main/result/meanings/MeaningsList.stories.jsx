import MeaningsList from "./MeaningsList"; // Import your Toggle component

export default {
  title: "Components/MeaningsList",
  component: MeaningsList,
};

const meanings = [
  {
    partOfSpeech: "noun",
    definitions: [
      {
        definition:
          "(etc.) A set of keys used to operate a typewriter, computer etc.",
        synonyms: [],
        antonyms: [],
      },
      {
        definition:
          "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
        synonyms: [],
        antonyms: [],
      },
      {
        definition:
          "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
        synonyms: [],
        antonyms: [],
      },
    ],
    synonyms: ["electronic keyboard"],
    antonyms: [],
  },
  {
    partOfSpeech: "verb",
    definitions: [
      {
        definition: "To type on a computer keyboard.",
        synonyms: [],
        antonyms: [],
        example: "Keyboarding is the part of this job I hate the most.",
      },
    ],
    synonyms: [],
    antonyms: [],
  },
];

export const mobile = () => <MeaningsList meanings={meanings} />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <MeaningsList meanings={meanings} />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
