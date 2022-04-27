import { simpleSingleTile } from "./single-tile";
import { twoByTwo } from "./two-by-two";
import { threeByThree } from "./three-by-three";
import { alphabetChart } from "./alphabet-chart";
import { Template } from "types";

export { simpleSingleTile, twoByTwo, threeByThree, alphabetChart };

export const ALL_TEMPLATES: Array<Template> = [
  simpleSingleTile,
  twoByTwo,
  threeByThree,
  alphabetChart,
];
