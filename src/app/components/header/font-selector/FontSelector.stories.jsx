import FontSelector from "./FontSelector";

export default {
  title: "Components/FontSelector",
  component: FontSelector,
};

export const mobile = () => <FontSelector />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <FontSelector />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
