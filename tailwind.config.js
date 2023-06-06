/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-darkest": "#050505",
        "black-darker": "#1F1F1F",
        "black-dark": "#2D2D2D",
        "black-medium": "#3A3A3A",
        "grey-dark": "#757575",
        "grey-light": "#E9E9E9",
        "grey-lighter": "#F4F4F4",
        white: "#FFFFFF",
        "purple-bright": "#A445ED",
        "red-bright": "#FF5252",
      },
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
        inter: ["Inter", "sans-serif"],
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
