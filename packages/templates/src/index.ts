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
import { reading } from "./reading";
import { portrait } from "./portrait";
import { blocks } from "./blocks";
import { simonSays } from "./simon-says";
import { mrPotatoHead } from "./mr-potato-head";
import { chatAboutTv } from "./chat-about-tv";
import { music } from "./music";

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
  portrait,
  bubbles,
};

export const ALL_TEMPLATES: Array<Template> = [
  core,
  portrait,
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
  reading,
  blocks,
  simonSays,
  mrPotatoHead,
  chatAboutTv,
  music,
];

export const WEB_TEMPLATES: Array<Template> = [
  core, // Downloadable
  bubbles, // Downloadable
  reading, // Downloadable
  alphabetChart, // Downloadable
  blocks, // Downloadable
  simonSays, // Downloadable
  mrPotatoHead, // Downloadable
  chatAboutTv, // Downloadable
  music, // Downloadable
];
