import PartOfSpeech from "./PartOfSpeech"; // Import your Toggle component

export default {
  title: "Components/Part Of Speech",
  component: PartOfSpeech,
};

export const Conjunction = () => <PartOfSpeech pos="Conjunction" />;
export const Verb = () => <PartOfSpeech pos="Verb" />;
