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

export const tablet = () => (
  <DefinitionSource link="https://en.wiktionary.org/wiki/keyboard" />
);
tablet.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const desktop = () => (
  <DefinitionSource link="https://en.wiktionary.org/wiki/keyboard" />
);
desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
