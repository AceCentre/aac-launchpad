import { initialise as initOpenDyslexicItalic } from "./OpenDyslexic-italic";
import { initialise as initOpenDyslexicNormal } from "./OpenDyslexic-normal";
import { initialise as initOpenDyslexicBold } from "./OpenDyslexic-bold";
import { initialise as initOpenDyslexicBoldItalic } from "./OpenDyslexic-bolditalic";
import { initialise as initHyperlegibleBold } from "./Atkinson-Hyperlegible-bold";
import { initialise as initHyperlegibleNormal } from "./Atkinson-Hyperlegible-normal";
import { initialise as initHyperlegibleItalic } from "./Atkinson-Hyperlegible-italic";
import { initialise as initHyperlegibleBoldItalic } from "./Atkinson-Hyperlegible-bolditalic";
import { initialise as initComicNeueNormal } from "./ComicNeue-normal";
import { initialise as initComicNeueBold } from "./ComicNeue-bold";
import { initialise as initComicNeueBoldItalic } from "./ComicNeue-bolditalic";
import { initialise as initComicNeueItalic } from "./ComicNeue-italic";

import { Option } from "types";

let hasFontsBeenInitialised = false;

export const initialiseFonts = () => {
  if (hasFontsBeenInitialised) return;

  initOpenDyslexicBold();
  initOpenDyslexicBoldItalic();
  initOpenDyslexicNormal();
  initOpenDyslexicItalic();

  initHyperlegibleBold();
  initHyperlegibleNormal();
  initHyperlegibleItalic();
  initHyperlegibleBoldItalic();

  initComicNeueNormal();
  initComicNeueBold();
  initComicNeueBoldItalic();
  initComicNeueItalic();

  hasFontsBeenInitialised = true;
};

export const FONT_OPTIONS: Array<Option> = [
  {
    label: "Helvetica",
    value: "helvetica",
    description: "Helvetica is a widely used sans-serif typeface",
  },
  {
    label: "OpenDyslexic",
    value: "OpenDyslexic",
    description:
      "OpenDyslexic is a typeface designed against some common symptoms of dyslexia",
  },
  {
    label: "Atkinson Hyperlegible",
    value: "Atkinson-Hyperlegible",
    description:
      "Atkinson Hyperlegible focuses on letterform distinction to increase character recognition, ultimately improving readability.",
  },
  {
    label: "Comic Neue (Sans)",
    value: "ComicNeue",
    description:
      "Comic Neue is an original reinterpretation of the classic, Comic Sans.",
  },
];
