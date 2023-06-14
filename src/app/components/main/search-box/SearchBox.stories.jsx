import SearchBox from "./SearchBox";

export default {
  title: "Components/SearchBox",
  component: SearchBox,
};

export const mobile = () => <SearchBox />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <SearchBox />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
