import "@app/globals.css";
import { Inconsolata, Inter, Lora } from "@app/fonts.js";
import { ThemeProvider } from "@contexts/ThemeContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
