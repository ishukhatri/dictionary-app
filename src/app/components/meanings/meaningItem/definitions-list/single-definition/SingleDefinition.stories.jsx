import MeaningItem from "./MeaningItem";

export default {
  title: "Components/MeaningsList/Item",
  component: MeaningItem,
};

export const mobile_with_example = () => (
  <MeaningItem
    meaning={"(etc.) A set of keys used to operate a typewriter, computer etc."}
    example={"Keyboarding is the part of this job I hate the most."}
  />
);
mobile_with_example.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const mobile_without_example = () => (
  <MeaningItem
    meaning={"(etc.) A set of keys used to operate a typewriter, computer etc."}
    example={""}
  />
);
mobile_without_example.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const non_mobile_with_example = () => (
  <MeaningItem
    meaning={"(etc.) A set of keys used to operate a typewriter, computer etc."}
    example={"Keyboarding is the part of this job I hate the most."}
  />
);
non_mobile_with_example.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const non_mobile_without_example = () => (
  <MeaningItem
    meaning={"(etc.) A set of keys used to operate a typewriter, computer etc."}
    example={""}
  />
);
non_mobile_without_example.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
