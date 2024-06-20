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
  tiles: Array<Tile>,
  includeHighContrast: boolean = true
): AllTemplateVariable => {
  let presets = [
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
  ];

  if (includeHighContrast) {
    presets.push({
      label: "PCS High Contrast",
      value: "pcs-high-contrast",
      description: "PCS High Contrast Symbols",
      variableValues: [
        { id: "background-colour", value: "rgb(255,255,255)" },
        { id: "cell-colour", value: "rgb(0,0,0)" },
        { id: "label-colour", value: "rgb(255,255,255)" },
        {
          id: "copyright-notice",
          value:
            "PCS is a trademark of Tobii Dynavox LLC. All rights reserved. Used with permission.",
        },
        ...generateSymbolPreset(tiles, "pcs-high-contrast"),
      ],
    });
  }

  return {
    id: "symbol-system",
    type: "preset",
    name: "Symbol System",
    defaultValue: "pcs",
    description: "The symbol system to use for the chart",
    presets,
  };
};
