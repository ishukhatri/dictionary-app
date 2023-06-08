import DefinitionsList from "./DefinitionsList";

export default {
  title: "Components/DefinitionsList",
  component: DefinitionsList,
};

const definitions = [
  {
    definition:
      "(etc.) A set of keys used to operate a typewriter, computer etc.",
  },
  {
    definition:
      "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
  },
  {
    definition:
      "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
    example: "Keyboarding is the part of this job I hate the most.",
  },
];

export const mobile = () => <DefinitionsList definitions={definitions} />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <DefinitionsList definitions={definitions} />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
