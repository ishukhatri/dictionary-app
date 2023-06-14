import localFont from "next/font/local";

export const Inconsolata = localFont({
  src: "./fonts/Inconsolata-VariableFont_wdth,wght.ttf",
  display: "swap",
  variable: "--font-inconsolata",
});

export const Inter = localFont({
  src: "./fonts/Inter-VariableFont_slnt,wght.ttf",
  display: "swap",
  variable: "--font-inter",
});

export const Lora = localFont({
  src: [
    { path: "./fonts/Lora-VariableFont_wght.ttf", style: "normal" },
    {
      path: "./fonts/Lora-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-lora",
});
