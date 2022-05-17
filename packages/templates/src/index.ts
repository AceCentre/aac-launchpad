import { alphabetChart } from "./alphabet-chart";
import { simpleChoice } from "./simple-choice";
import { Template } from "types";
import { withImages } from "./with-images";
import { fourImages } from "./four-images";

export { alphabetChart, simpleChoice, withImages };

export const ALL_TEMPLATES: Array<Template> = [
  alphabetChart,
  simpleChoice,
  withImages,
  fourImages,
];
