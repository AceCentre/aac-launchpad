import { initialise as initOpenDyslexicItalic } from "./OpenDyslexic-italic.js";
import { initialise as initOpenDyslexicNormal } from "./OpenDyslexic-normal.js";
import { initialise as initOpenDyslexicBold } from "./OpenDyslexic-bold.js";
import { initialise as initOpenDyslexicBoldItalic } from "./OpenDyslexic-bolditalic.js";
import { Font } from "types";

export const initialiseFonts = () => {
  initOpenDyslexicBold();
  initOpenDyslexicBoldItalic();
  initOpenDyslexicNormal();
  initOpenDyslexicItalic();
};

export const VALID_FONTS: Array<Font> = [
  {
    name: "OpenDyslexic",
    id: "OpenDyslexic",
    styles: ["normal", "italic", "bolditalic", "bold"],
    description:
      "OpenDyslexic is a typeface designed against some common symptoms of dyslexia",
    link: "https://opendyslexic.org/",
  },
  {
    name: "Helvetica",
    id: "helvetica",
    styles: ["normal", "italic", "bolditalic", "bold"],
    description: "Helvetica is a widely used sans-serif typeface",
    link: "https://en.wikipedia.org/wiki/Helvetica",
  },
];
