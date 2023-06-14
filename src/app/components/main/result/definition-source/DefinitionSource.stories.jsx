import DefinitionSource from "./DefinitionSource"; // Import your Toggle component

export default {
  title: "Components/Definition Source",
  component: DefinitionSource,
};

export const mobile = () => (
  <DefinitionSource link="https://en.wiktionary.org/wiki/keyboard" />
);
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => (
  <DefinitionSource link="https://en.wiktionary.org/wiki/keyboard" />
);
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
