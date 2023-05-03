import {
  Board,
  Button,
  Grid,
  LaunchpadOptions,
  Template,
  TemplateItem,
  Result,
  Image,
  Casing,
  GridWithTemplateItems,
  Page,
  ButtonID,
  Orientation,
  PageWithTemplateItems,
  Padding,
  LaunchpadOptionsWithTemplateItems,
  PaddingWithTemplateItem,
} from "types";

const getPadding = (
  template: LaunchpadOptionsWithTemplateItems,
  results: Array<Result>
): number | Padding | undefined => {
  const givenPadding = template.padding;

  if (givenPadding === undefined) return undefined;
  if (typeof givenPadding === "number") return givenPadding;
  if ("type" in givenPadding && givenPadding.type === "TemplateItem")
    return getNumberFromTemplateItem(givenPadding, results);

  const specificPadding = givenPadding as PaddingWithTemplateItem;

  return {
    horizontal: getNumberFromTemplateItem(specificPadding.horizontal, results),
    vertical: getNumberFromTemplateItem(specificPadding.vertical, results),
  };
};

const getExtLaunchpadOptions = (
  template: Template,
  results: Array<Result>
): LaunchpadOptions => {
  const launchpadOptions = template.ext_launchpad_options;

  return {
    padding: getPadding(launchpadOptions, results),
    gap: getOptionalNumberFromTemplateItem(launchpadOptions.gap, results),
    button_border_width: getOptionalNumberFromTemplateItem(
      launchpadOptions.button_border_width,
      results
    ),
    button_radius: getOptionalNumberFromTemplateItem(
      launchpadOptions.button_radius,
      results
    ),
    title_shown_on_board: getOptionalStringFromTemplateItem(
      launchpadOptions.title_shown_on_board,
      results
    ),
    full_background_color: getOptionalStringFromTemplateItem(
      launchpadOptions.full_background_color,
      results
    ),
    copyright_notice: getOptionalStringFromTemplateItem(
      launchpadOptions.copyright_notice,
      results
    ),
    invert_symbol_and_label: getOptionalBooleanFromTemplateItem(
      launchpadOptions.invert_symbol_and_label,
      results
    ),
    autofit_label_text: getOptionalBooleanFromTemplateItem(
      launchpadOptions.autofit_label_text,
      results
    ),
    ext_launchpad_prepend_pdf: launchpadOptions.ext_launchpad_prepend_pdf,
    use_ace_branding: launchpadOptions.use_ace_branding,
    use_page_numbers: launchpadOptions.use_page_numbers,
    text_color_on_background: getOptionalStringFromTemplateItem(
      launchpadOptions.text_color_on_background,
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
const castToCasing = (input: string | undefined): Casing | undefined => {
  if (input === undefined) return undefined;

  const validCasing = ["no-change", "lower", "upper", "capital"];

  if (validCasing.includes(input)) {
    return input as Casing;
  }

  throw new Error(`You entered an invalid casing option: ${input}`);
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
      ext_button_border_width: getOptionalNumberFromTemplateItem(
        current.ext_button_border_width,
        results
      ),
      ext_launchpad_label_casing: castToCasing(
        getOptionalStringFromTemplateItem(
          current.ext_launchpad_label_casing,
          results
        )
      ),
      ext_launchpad_label_below: getOptionalBooleanFromTemplateItem(
        current.ext_launchpad_label_below,
        results
      ),
    };
  });
};

const getGrid = (grid: GridWithTemplateItems, results: Array<Result>): Grid => {
  const orderTemplateItem = grid.order as TemplateItem;
  if (orderTemplateItem && orderTemplateItem.type === "TemplateItem") {
    const result = getStringFromTemplateItem(orderTemplateItem, results);
    const parsed = JSON.parse(result);

    let order: Array<Array<ButtonID | null>> = [];

    if (!Array.isArray(parsed)) {
      throw new Error(`Please provide a valid grid: '${result}'`);
    }

    for (const current of parsed) {
      if (!Array.isArray(current)) {
        throw new Error(`Please provide a valid grid: '${result}'`);
      }

      let temp: Array<ButtonID | null> = [];

      for (const element of current) {
        if (element === null) {
          temp.push(element);
        } else if (typeof element === "string") {
          temp.push(element);
        } else {
          throw new Error(`Please provide a valid grid: '${result}'`);
        }
      }

      order.push(temp);
    }

    return {
      rows: getNumberFromTemplateItem(grid.rows, results),
      columns: getNumberFromTemplateItem(grid.columns, results),
      order,
    };
  } else {
    return {
      rows: getNumberFromTemplateItem(grid.rows, results),
      columns: getNumberFromTemplateItem(grid.columns, results),
      order: grid.order as Array<Array<ButtonID | null>>,
    };
  }
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

const getOrientationFromTemplateItem = (
  page: PageWithTemplateItems,
  results: Array<Result>
): Orientation => {
  const orientation = getOptionalStringFromTemplateItem(
    page.orientation,
    results
  );

  if (orientation === undefined) {
    return "landscape";
  }

  if (orientation !== "landscape" && orientation !== "portrait") {
    throw new Error(
      `You provided '${orientation}' as an orientation for page '${page.id}, which is invalid'`
    );
  }

  return orientation;
};

const getPages = (template: Template, results: Array<Result>): Array<Page> => {
  return template.pages.map((page) => {
    const grid = getGrid(page.grid, results);
    return {
      grid,
      id: page.id,
      orientation: getOrientationFromTemplateItem(page, results),
      ext_launchpad_title_shown_on_board: getOptionalStringFromTemplateItem(
        page.ext_launchpad_title_shown_on_board,
        results
      ),
      ext_launchpad_with_row_labels: getOptionalBooleanFromTemplateItem(
        page.ext_launchpad_with_row_labels,
        results
      ),
    };
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
  const pages = getPages(template, results);
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
    pages,
    images,
  };
};

export default templateToBoard;
