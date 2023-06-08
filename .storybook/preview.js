/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from "../src/app/contexts/ThemeContext"; // Example theme provider
import "../src/app/globals.css";
import { Preview } from "@storybook/react";

export const decorators = [
  (Story) => (
    <ThemeProvider theme="default">
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </ThemeProvider>
  ),
];

// Global decorator
// addDecorator((storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>);

// Global parameters
// addParameters({
//   backgrounds: [
//     { name: "Default", value: "#ffffff", default: true },
//     { name: "Dark", value: "#000000" },
//   ],
// });

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      defaultViewport: "mobile", // Set the default viewport to responsive
      viewports: {
        // Define specific viewports with desired widths
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px", // Set the desired width for the desktop viewport
            height: "1205px", // Set the desired height
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px", // Set the desired width for the tablet viewport
            height: "1197px", // Set the desired height
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px", // Set the desired width for the mobile viewport
            height: "1065px", // Set the desired height
          },
        },
      },
    },
  },
};

export default preview;
