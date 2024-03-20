import { AllTemplateVariable } from "types";
import { toHandPointing } from "./hand-pointing";
import { toEyePointing } from "./eye-pointing";

const setupCoreForTile = (current: string): string => {
  if (current === current.toLowerCase()) {
    return `${current.toLowerCase()}-non-core`;
  } else if (current === current.toUpperCase()) {
    return `${current.toLowerCase()}-core`;
  }
  throw new Error("This should never run");
};

const setupCoreForGrid = (grid: Array<Array<string>>): Array<Array<string>> => {
  return grid.map((x): Array<string> => {
    return x.map((y) => setupCoreForTile(y));
  });
};

export const getLayoutPreset = (
  {
    intro,
    stageOne,
    stageTwo,
    eyePointing,
    handPointing,
  }: {
    intro: Array<Array<string>>;
    stageOne: Array<Array<string>>;
    stageTwo: Array<Array<string>>;
    eyePointing: Array<Array<string>>;
    handPointing: Array<Array<string>>;
  },
  coverPostfix: string,
  coreBorder: number = 2
): AllTemplateVariable => {
  return {
    id: "grid",
    type: "preset",
    description:
      "Select how you would like the chart to be laid out, ie finger, hand or eye pointing",
    defaultValue: "intro",
    name: "Layout",
    presets: [
      {
        value: "intro",
        label: "Intro - Finger Pointing",
        description: "Intro - Finger Pointing",
        variableValues: [
          {
            id: "cover",
            value: `fp-${coverPostfix}.pdf`,
          },
          {
            id: "core-border",
            value: coreBorder.toString(),
          },
          {
            id: "rows",
            value: intro.length.toString(),
          },
          {
            id: "columns",
            value: intro[0].length.toString(),
          },
          {
            id: "order",
            value: JSON.stringify(setupCoreForGrid(intro)),
          },
        ],
      },
      {
        value: "stage-1",
        label: "Stage 1 - Finger Pointing",
        description: "Stage 1 - Finger Pointing",
        variableValues: [
          {
            id: "cover",
            value: `fp-${coverPostfix}.pdf`,
          },
          {
            id: "core-border",
            value: coreBorder.toString(),
          },
          {
            id: "rows",
            value: stageOne.length.toString(),
          },
          {
            id: "columns",
            value: intro[0].length.toString(),
          },
          {
            id: "order",
            value: JSON.stringify(setupCoreForGrid(stageOne)),
          },
        ],
      },
      {
        value: "stage-2",
        label: "Stage 2 - Finger Pointing",
        description: "Stage 2 - Finger Pointing",
        variableValues: [
          {
            id: "cover",
            value: `fp-${coverPostfix}.pdf`,
          },
          {
            id: "core-border",
            value: coreBorder.toString(),
          },
          {
            id: "rows",
            value: stageTwo.length.toString(),
          },
          {
            id: "columns",
            value: stageTwo[0].length.toString(),
          },
          {
            id: "order",
            value: JSON.stringify(setupCoreForGrid(stageTwo)),
          },
        ],
      },

      {
        value: "eye-pointing",
        label: "Eye Pointing",
        description: "Eye Pointing",
        variableValues: [
          {
            id: "cover",
            value: `ep-${coverPostfix}.pdf`,
          },
          {
            id: "gap",
            value: "10",
          },
          {
            id: "rows",
            value: "6",
          },
          {
            id: "columns",
            value: "5",
          },
          {
            id: "core-border",
            value: "1",
          },
          {
            id: "order",
            value: toEyePointing(setupCoreForGrid(eyePointing)),
          },
        ],
      },
      {
        value: "hand",
        label: "Hand Pointing",
        description: "Hand Pointing",
        variableValues: [
          {
            id: "cover",
            value: `hp-${coverPostfix}.pdf`,
          },
          {
            id: "rows",
            value: "3",
          },
          {
            id: "columns",
            value: "5",
          },
          {
            id: "core-border",
            value: "1",
          },
          {
            id: "order",
            value: toHandPointing(setupCoreForGrid(handPointing)),
          },
        ],
      },
    ],
  };
};
