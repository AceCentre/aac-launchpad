import { AllTemplateVariable, ImageWithTemplateItems } from "types";
import { Tile } from "./tiles";

export const generateImageVariables = (
  tiles: Array<Tile>,
  name: string
): Array<AllTemplateVariable> => {
  return tiles.map((tile): AllTemplateVariable => {
    const fileName = tile.key.replace("-non-core", "").replace("-core", "");

    return {
      type: "imageUrl",
      name: tile.key,
      id: tile.key,
      description: tile.key,
      hidden: true,
      defaultValue: `./symbols/${name}/${fileName}.png`,
    };
  });
};

export const generateImages = (
  tiles: Array<Tile>
): Array<ImageWithTemplateItems> => {
  return tiles.map((tile) => ({
    id: tile.key,
    url: { type: "TemplateItem", id: tile.key },
  }));
};
