import { AllTemplateVariable, PresetVariableValues } from "types";
import { Tile } from "./tiles";

export const generateSymbolPreset = (
  tiles: Array<Tile>,
  name: string
): PresetVariableValues => {
  return tiles.map((tile) => {
    const fileName = tile.key.replace("-non-core", "").replace("-core", "");

    return {
      id: tile.key,
      value: `./symbols/${name}/${fileName}.png`,
    };
  });
};

export const generateAllSymbolPresets = (
  tiles: Array<Tile>
): AllTemplateVariable => {
  return {
    id: "symbol-system",
    type: "preset",
    name: "Symbol System",
    defaultValue: "widgit",
    description: "The symbol system to use for the chart",
    presets: [
      {
        label: "PCS",
        value: "pcs",
        description: "PCS Symbols",
        variableValues: [
          {
            id: "copyright-notice",
            value:
              "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
          },
          ...generateSymbolPreset(tiles, "pcs"),
        ],
      },

      {
        label: "Widgit",
        value: "widgit",
        description: "Widgit Symbols",
        variableValues: [
          {
            id: "copyright-notice",
            value: "Widgit Symbols © Widgit Software 2002-2023 www.widgit.com",
          },

          ...generateSymbolPreset(tiles, "widgit"),
        ],
      },
    ],
  };
};
