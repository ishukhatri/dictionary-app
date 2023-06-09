import Header from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

export const mobile = () => <Header />;
mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const nonMobile = () => <Header />;
nonMobile.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
