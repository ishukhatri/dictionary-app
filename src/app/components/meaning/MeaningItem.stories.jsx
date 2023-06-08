import MeaningItem from "./MeaningItem";

export default {
  title: "Components/Meaning",
  component: MeaningItem,
};

export const MeaningWithExample = () => (
  <MeaningItem
    meaning={"(etc.) A set of keys used to operate a typewriter, computer etc."}
    example={"Keyboarding is the part of this job I hate the most."}
  />
);
export const MeaningWithoutExample = () => (
  <MeaningItem
    meaning={"(etc.) A set of keys used to operate a typewriter, computer etc."}
    example={""}
  />
);
