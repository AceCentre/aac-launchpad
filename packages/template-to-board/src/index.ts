import {
  Board,
  Button,
  Grid,
  LaunchpadOptions,
  Template,
  TemplateItem,
  Result,
  Image,
} from "types";

const getExtLaunchpadOptions = (
  template: Template,
  results: Array<Result>
): LaunchpadOptions => {
  const launchpadOptions = template.ext_launchpad_options;

  return {
    padding: getOptionalNumberFromTemplateItem(
      launchpadOptions.padding,
      results
    ),
    gap: getOptionalNumberFromTemplateItem(launchpadOptions.gap, results),
    button_border_width: getOptionalNumberFromTemplateItem(
      launchpadOptions.button_border_width,
      results
    ),
    button_radius: getOptionalNumberFromTemplateItem(
      launchpadOptions.button_radius,
      results
    ),
  };
};

const getStringFromTemplateItem = (
  item: string | TemplateItem,
  results: Array<Result>
): string => {
  if (typeof item === "string") {
    return item;
  }

  if (item.type === "TemplateItem") {
    const result = results.find((x) => x.id === item.id);

    if (result === undefined) {
      throw new Error(`No result found for ${item.id}`);
    }

    return result.value;
  }

  throw new Error(`You provided an invalid item: ${JSON.stringify(item)}`);
};

const getOptionalStringFromTemplateItem = (
  item: string | TemplateItem | undefined,
  results: Array<Result>
): string | undefined => {
  if (item === undefined) {
    return undefined;
  }

  if (typeof item === "string") {
    return item;
  }

  if (item.type === "TemplateItem") {
    const result = results.find((x) => x.id === item.id);

    if (result === undefined) {
      throw new Error(`No result found for ${item.id}`);
    }

    return result.value;
  }

  throw new Error(`You provided an invalid item: ${JSON.stringify(item)}`);
};

const getNullableStringFromTemplateItem = (
  item: string | TemplateItem | null,
  results: Array<Result>
): string | null => {
  if (item === null) {
    return null;
  }

  if (typeof item === "string") {
    return item;
  }

  if (item.type === "TemplateItem") {
    const result = results.find((x) => x.id === item.id);

    if (result === undefined) {
      throw new Error(`No result found for ${item.id}`);
    }

    return result.value;
  }

  throw new Error(`You provided an invalid item: ${JSON.stringify(item)}`);
};

const getOptionalNumberFromTemplateItem = (
  item: number | TemplateItem | undefined,
  results: Array<Result>
): number | undefined => {
  if (item === undefined) {
    return undefined;
  }

  if (typeof item === "number") {
    return item;
  }

  if (item.type === "TemplateItem") {
    const result = results.find((x) => x.id === item.id);

    if (result === undefined) {
      throw new Error(`No result found for ${item.id}`);
    }

    const parsed = parseInt(result.value);

    if (isNaN(parsed)) {
      throw new Error(`Could not parse number: ${result.value}`);
    }

    return parsed;
  }

  throw new Error(`You provided an invalid item: ${JSON.stringify(item)}`);
};

const getNumberFromTemplateItem = (
  item: number | TemplateItem,
  results: Array<Result>
): number => {
  if (typeof item === "number") {
    return item;
  }

  if (item.type === "TemplateItem") {
    const result = results.find((x) => x.id === item.id);

    if (result === undefined) {
      throw new Error(`No result found for ${item.id}`);
    }

    const parsed = parseInt(result.value);

    if (isNaN(parsed)) {
      throw new Error(`Could not parse number: ${result.value}`);
    }

    return parsed;
  }

  throw new Error(`You provided an invalid item: ${JSON.stringify(item)}`);
};

const getOptionalBooleanFromTemplateItem = (
  item: boolean | TemplateItem | undefined,
  results: Array<Result>
): boolean | undefined => {
  if (item === undefined) {
    return undefined;
  }

  if (typeof item === "boolean") {
    return item;
  }

  if (item.type === "TemplateItem") {
    const result = results.find((x) => x.id === item.id);

    if (result === undefined) {
      throw new Error(`No result found for ${item.id}`);
    }

    if (result.value === "true") return true;
    if (result.value === "false") return false;

    throw new Error(`Could not parse boolean: ${result.value}`);
  }

  throw new Error(`You provided an invalid item: ${JSON.stringify(item)}`);
};

const getButtons = (
  template: Template,
  results: Array<Result>
): Array<Button> => {
  return template.buttons.map((current): Button => {
    return {
      image_id: current.image_id,
      id: getStringFromTemplateItem(current.id, results),
      label: getStringFromTemplateItem(current.label, results),
      border_color: getStringFromTemplateItem(current.border_color, results),
      background_color: getStringFromTemplateItem(
        current.background_color,
        results
      ),
      ext_launchpad_label_color: getOptionalStringFromTemplateItem(
        current.ext_launchpad_label_color,
        results
      ),
      ext_launchpad_label_font_style: getOptionalStringFromTemplateItem(
        current.ext_launchpad_label_font_style,
        results
      ),
      ext_launchpad_label_font: getOptionalStringFromTemplateItem(
        current.ext_launchpad_label_font,
        results
      ),
      ext_launchpad_label_font_size: getOptionalNumberFromTemplateItem(
        current.ext_launchpad_label_font_size,
        results
      ),
    };
  });
};

const getGrid = (template: Template, results: Array<Result>): Grid => {
  return {
    rows: getNumberFromTemplateItem(template.grid.rows, results),
    columns: getNumberFromTemplateItem(template.grid.columns, results),
    order: template.grid.order.map((x) =>
      x.map((z) => getNullableStringFromTemplateItem(z, results))
    ),
  };
};

const getImages = (
  template: Template,
  results: Array<Result>
): Array<Image> => {
  return template.images.map((image) => {
    const url = getStringFromTemplateItem(image.url, results);
    return { id: image.id, url };
  });
};

const templateToBoard = (template: Template, results: Array<Result>): Board => {
  const format = getStringFromTemplateItem(template.format, results);
  const id = getStringFromTemplateItem(template.id, results);
  const locale = getStringFromTemplateItem(template.locale, results);
  const url = getOptionalStringFromTemplateItem(template.url, results);
  const name = getStringFromTemplateItem(template.name, results);
  const description_html = getStringFromTemplateItem(
    template.description_html,
    results
  );
  const ext_launchpad_options = getExtLaunchpadOptions(template, results);
  const buttons = getButtons(template, results);
  const grid = getGrid(template, results);
  const images = getImages(template, results);

  return {
    format,
    id,
    locale,
    url,
    description_html,
    ext_launchpad_options,
    name,
    buttons,
    grid,
    images,
  };
};

export default templateToBoard;
