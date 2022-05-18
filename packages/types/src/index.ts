type BoardID = string;
type ButtonID = string;
export type Result = { id: string; value: string };

/**
 * Color attributes are string values and can be represented as rgb or rgba values.
 */
type Color = string;

export type Button = {
  id: ButtonID;
  label: string;
  border_color: Color;
  background_color: Color;
  ext_launchpad_label_color?: Color;
  ext_launchpad_label_font_size?: number;
  ext_launchpad_label_font_style?: string;
  ext_launchpad_label_font?: string;
  image_id?: string;
};

export type Image = {
  // Gone a bit of spec here, its easier for us to infer the content type and width and height
  id: string;
  url: string;
};

type ButtonWithTemplateItems = {
  id: ButtonID | TemplateItem;
  label: string | TemplateItem;
  border_color: Color | TemplateItem;
  background_color: Color | TemplateItem;
  ext_launchpad_label_color?: Color | TemplateItem;
  ext_launchpad_label_font_size?: number | TemplateItem;
  ext_launchpad_label_font_style?: string | TemplateItem;
  ext_launchpad_label_font?: string | TemplateItem;
  image_id?: string;
};

export type Grid = {
  rows: number;
  columns: number;
  order: Array<Array<ButtonID | null>>;
};

type GridWithTemplateItems = {
  rows: number | TemplateItem;
  columns: number | TemplateItem;
  order: Array<Array<ButtonID | null | TemplateItem>>;
};

export type LaunchpadOptions = {
  padding?: number;
  gap?: number;
  button_radius?: number;
  button_border_width?: number;
};

type LaunchpadOptionsWithTemplateItems = {
  padding?: number | TemplateItem;
  gap?: number | TemplateItem;
  button_radius?: number | TemplateItem;
  button_border_width?: number | TemplateItem;
};

export interface TemplateVariable {
  id: string;
  description: string;
  type: string;
  name: string;
  defaultValue: string;
}

export type Option = {
  value: string;
  label: string;
  description: string;
};

interface OptionTemplateVariable extends TemplateVariable {
  type: "option";
  options: Array<Option>;
}

interface FreeTextTemplateVariable extends TemplateVariable {
  type: "freeText";
  maxLength: number;
}

interface NumberTemplateVariable extends TemplateVariable {
  type: "number";
  min: number;
  max: number;
}

interface ColorTemplateVariable extends TemplateVariable {
  type: "color";
}

interface ImageUrlVariable extends TemplateVariable {
  type: "imageUrl";
}

export type TemplateItem = {
  id: string;
  type: "TemplateItem";
};

export type AllTemplateVariable =
  | OptionTemplateVariable
  | FreeTextTemplateVariable
  | NumberTemplateVariable
  | ColorTemplateVariable
  | ImageUrlVariable;

export type Template = {
  templateVariables: Array<AllTemplateVariable>;
  templateName: string;
  templateDescription: string;
  templateId: string;
  templateImageUrl: string;

  format: string | TemplateItem;
  id: BoardID | TemplateItem;
  locale: string | TemplateItem;
  url?: string | TemplateItem;
  name: string | TemplateItem;
  ext_launchpad_options: LaunchpadOptionsWithTemplateItems;
  description_html: string | TemplateItem;
  buttons: Array<ButtonWithTemplateItems>;
  grid: GridWithTemplateItems;

  images: Array<ImageWithTemplateItems>;
};

type ImageWithTemplateItems = {
  id: string;
  url: string | TemplateItem;
};

export type Board = {
  format: string;
  id: BoardID;
  locale: string;
  url?: string;
  name: string;
  ext_launchpad_options: LaunchpadOptions;

  /**
   * The standard allows you to include html in this field, but this implementation
   * only allows text and will render the html as plain text. This is to avoid having
   * to worrying about parsing the html safely
   */
  description_html: string;

  buttons: Button[];
  grid: Grid;

  images: Array<Image>;
};
