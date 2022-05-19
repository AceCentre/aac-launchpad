import { initialise as initOpenDyslexicItalic } from "./OpenDyslexic-italic";
import { initialise as initOpenDyslexicNormal } from "./OpenDyslexic-normal";
import { initialise as initOpenDyslexicBold } from "./OpenDyslexic-bold";
import { initialise as initOpenDyslexicBoldItalic } from "./OpenDyslexic-bolditalic";
import { initialise as initHyperlegibleBold } from "./Atkinson-Hyperlegible-bold";
import { initialise as initHyperlegibleNormal } from "./Atkinson-Hyperlegible-normal";
import { initialise as initHyperlegibleItalic } from "./Atkinson-Hyperlegible-italic";
import { initialise as initHyperlegibleBoldItalic } from "./Atkinson-Hyperlegible-bolditalic";

import { Option } from "types";

export const initialiseFonts = () => {
  initOpenDyslexicBold();
  initOpenDyslexicBoldItalic();
  initOpenDyslexicNormal();
  initOpenDyslexicItalic();
  initHyperlegibleBold();
  initHyperlegibleNormal();
  initHyperlegibleItalic();
  initHyperlegibleBoldItalic();
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
  {
    label: "Atkinson Hyperlegible",
    value: "Atkinson-Hyperlegible",
    description:
      "Atkinson Hyperlegible focuses on letterform distinction to increase character recognition, ultimately improving readability.",
  },
];
