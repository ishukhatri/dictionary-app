import PartOfSpeech from "./PartOfSpeech"; // Import your Toggle component

export default {
  title: "Components/Part Of Speech",
  component: PartOfSpeech,
};

export const mobile = () => <PartOfSpeech pos="Conjunction" />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <PartOfSpeech pos="Conjunction" />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
