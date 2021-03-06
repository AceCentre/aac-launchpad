import { alphabetChart } from "./alphabet-chart";
import { simpleChoice } from "./simple-choice";
import { Template } from "types";
import { withImages } from "./with-images";
import { fourImages } from "./four-images";
import { fontPicker } from "./font-picker";
import { changeCasing } from "./change-casing";
import { multiplePages } from "./multiple-pages";
import { presetExample } from "./presets";
import { simpleSingleTile } from "./single-tile";
import { threeByThree } from "./three-by-three";
import { twoByTwo } from "./two-by-two";
import { labelsBelow } from "./labels-below";
import { variableGroup } from "./variable-group";
import { prependPdf } from "./prepend-pdf";
import { jubilee } from "./jubilee";
import { gridOptions } from "./grid-options";
import { core } from "./core";
import { bubbles } from "./bubbles";

export {
  alphabetChart,
  simpleChoice,
  withImages,
  fourImages,
  fontPicker,
  changeCasing,
  multiplePages,
  presetExample,
  simpleSingleTile,
  threeByThree,
  twoByTwo,
  labelsBelow,
  variableGroup,
  prependPdf,
  jubilee,
  gridOptions,
  bubbles,
};

export const ALL_TEMPLATES: Array<Template> = [
  alphabetChart,
  simpleChoice,
  withImages,
  fourImages,
  fontPicker,
  changeCasing,
  multiplePages,
  presetExample,
  simpleSingleTile,
  threeByThree,
  twoByTwo,
  labelsBelow,
  variableGroup,
  prependPdf,
  jubilee,
  gridOptions,
  core,
  bubbles,
];

export const WEB_TEMPLATES: Array<Template> = [core, bubbles];
