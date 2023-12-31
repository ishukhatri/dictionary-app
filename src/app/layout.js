import "@app/globals.css";
import { Inconsolata, Inter, Lora } from "@app/fonts.js";
import { ThemeProvider } from "@contexts/ThemeContext";

export const metadata = {
  title: "Dictionary Web App",
  description: "App Build with Nextjs SSR, Reactjs, tailwindcss, Storybook",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${Inconsolata.variable} ${Inter.variable} ${Lora.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
