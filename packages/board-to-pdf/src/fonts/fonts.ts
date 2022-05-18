import { initialise as initOpenDyslexicItalic } from "./OpenDyslexic-italic.js";
import { initialise as initOpenDyslexicNormal } from "./OpenDyslexic-normal.js";
import { initialise as initOpenDyslexicBold } from "./OpenDyslexic-bold.js";
import { initialise as initOpenDyslexicBoldItalic } from "./OpenDyslexic-bolditalic.js";
import { Option } from "types";

export const initialiseFonts = () => {
  initOpenDyslexicBold();
  initOpenDyslexicBoldItalic();
  initOpenDyslexicNormal();
  initOpenDyslexicItalic();
};

export const FONT_OPTIONS: Array<Option> = [
  {
    label: "OpenDyslexic",
    value: "OpenDyslexic",
    description:
      "OpenDyslexic is a typeface designed against some common symptoms of dyslexia",
  },
  {
    label: "Helvetica",
    value: "helvetica",
    description: "Helvetica is a widely used sans-serif typeface",
  },
];
