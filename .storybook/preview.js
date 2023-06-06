/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from "../src/app/contexts/ThemeContext"; // Example theme provider
import "../src/app/globals.css";

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

// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;
