import { Result, Template } from "types";

export const getResults = (
  template: Template,
  templateResults: any,
  presetOverrides: any
): Array<Result> => {
  return template.templateVariables
    .sort((a, b) => {
      if (a.type === "preset" && b.type !== "preset") {
        return 1;
      }
      if (a.type !== "preset" && b.type === "preset") {
        return -1;
      }
      return 0;
    })
    .map((currentVariable) => {
      // If the user gave an explicit answer use that
      if (templateResults[currentVariable.id]) {
        return {
          id: currentVariable.id,
          value: templateResults[currentVariable.id],
        };
      }

      // If there was a preset answer give that
      if (presetOverrides[currentVariable.id]) {
        return {
          id: currentVariable.id,
          value: presetOverrides[currentVariable.id],
        };
      }

      // Otherwise use the default value
      return {
        id: currentVariable.id,
        value: currentVariable.defaultValue,
      };
    });
};
