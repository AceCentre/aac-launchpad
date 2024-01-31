type BoardID = string;
export type ButtonID = string;
export type Result = { id: string; value: string };

/**
 * Color attributes are string values and can be represented as rgb or rgba values.
 */
type Color = string;

export type Casing = "no-change" | "lower" | "upper" | "capital" | "sentence";

export type Button = {
  id: ButtonID;
  label: string;
  border_color: Color;
  background_color: Color;
  ext_launchpad_label_color?: Color;
  ext_launchpad_label_font_size?: number;
  ext_button_border_width?: number;
  ext_launchpad_label_font_style?: string;
  ext_launchpad_label_font?: string;
  ext_launchpad_label_casing?: Casing;
  ext_launchpad_label_below?: boolean;
  image_id?: string;
  dashed_line?: boolean;
};

export type Image = {
  // Gone a bit of spec here, its easier for us to infer the content type and width and height
  id: string;
  url: string;
};

export type ButtonWithTemplateItems = {
  id: ButtonID | TemplateItem;
  label: string | TemplateItem;
  border_color: Color | TemplateItem;
  background_color: Color | TemplateItem;
  ext_launchpad_label_color?: Color | TemplateItem;
  ext_launchpad_label_font_size?: number | TemplateItem;
  ext_launchpad_label_font_style?: string | TemplateItem;
  ext_launchpad_label_font?: string | TemplateItem;
  ext_launchpad_label_casing?: Casing | TemplateItem;
  ext_launchpad_label_below?: boolean | TemplateItem;
  ext_button_border_width?: number | TemplateItem;
  image_id?: string;
  dashed_line?: boolean;
};

export type Grid = {
  rows: number;
  columns: number;
  order: Array<Array<ButtonID | null>>;
};

export type GridWithTemplateItems = {
  rows: number | TemplateItem;
  columns: number | TemplateItem;
  order: Array<Array<ButtonID | null>> | TemplateItem;
};

export type LaunchpadOptions = {
  padding?: number | Padding;
  gap?: number;
  button_radius?: number;
  button_border_width?: number;
  ext_launchpad_prepend_pdf?: string;
  title_shown_on_board?: string;
  full_background_color?: Color;
  copyright_notice?: string;
  invert_symbol_and_label?: boolean;
  autofit_label_text?: boolean;
  text_color_on_background?: Color;
  use_ace_branding?: boolean;
  use_page_numbers?: boolean;
};

export type Padding = {
  horizontal: number;
  vertical: number;
};

export type PaddingWithTemplateItem = {
  horizontal: number | TemplateItem;
  vertical: number | TemplateItem;
};

export type LaunchpadOptionsWithTemplateItems = {
  padding?: number | TemplateItem | PaddingWithTemplateItem;
  gap?: number | TemplateItem;
  button_radius?: number | TemplateItem;
  button_border_width?: number | TemplateItem;
  title_shown_on_board?: string | TemplateItem;
  text_color_on_background?: Color | TemplateItem;
  full_background_color?: Color | TemplateItem;
  copyright_notice?: string | TemplateItem;
  invert_symbol_and_label?: boolean | TemplateItem;
  autofit_label_text?: boolean | TemplateItem;
  use_ace_branding?: boolean;
  use_page_numbers?: boolean;
  ext_launchpad_prepend_pdf?: string | TemplateItem;
};

export interface TemplateVariable {
  id: string;
  description: string;
  type: string;
  name: string;
  defaultValue: string;
  hidden?: boolean;
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

interface BooleanVariable extends TemplateVariable {
  type: "boolean";
  trueLabel: string;
  falseLabel: string;
}

export type PresetVariableValues = Array<{ id: string; value: string }>;

export type Preset = {
  value: string;
  label: string;
  description: string;
  variableValues: PresetVariableValues;
};

// The engine will ignore these variables, it will be up to the interface to update
// the derived variables and send them down. This will allow easy override by the user
// Each variable should only be dependent on one preset otherwise it will get messy.
export interface PresetVariable extends TemplateVariable {
  type: "preset";
  presets: Array<Preset>;
  hidden?: false;
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
  | ImageUrlVariable
  | PresetVariable
  | BooleanVariable;

type TemplateVariableGroup = {
  id: string;
  variables: Array<string>;
  name: string;
  description: string;
  openByDefault: boolean;
};

export type Template = {
  templateFeatured: boolean;
  templateCategory: string;
  templateSubcategory: string;
  templateVariables: Array<AllTemplateVariable>;
  templateVariableGroups: Array<TemplateVariableGroup>;
  templateDateCreated: string;
  templateName: string;
  templateDescription: string;
  templateId: string;
  templateImageUrl: string;
  templateShortDescription: string;

  format: string | TemplateItem;
  id: BoardID | TemplateItem;
  locale: string | TemplateItem;
  url?: string | TemplateItem;
  name: string | TemplateItem;
  ext_launchpad_options: LaunchpadOptionsWithTemplateItems;
  description_html: string | TemplateItem;
  buttons: Array<ButtonWithTemplateItems>;
  pages: Array<PageWithTemplateItems>;
  images: Array<ImageWithTemplateItems>;
};

export type ImageWithTemplateItems = {
  id: string;
  url: string | TemplateItem;
};

export type Orientation = "portrait" | "landscape";

export type Page = {
  id: string;
  orientation?: Orientation;
  ext_launchpad_with_row_labels?: boolean;
  ext_launchpad_title_shown_on_board?: string;
  ext_launchpad_overlay_image?: {
    path: string;
    scale: number;
    yOffset: number;
  };
  grid: Grid;
};

export type PageWithTemplateItems = {
  id: string;
  orientation?: string | TemplateItem;
  grid: GridWithTemplateItems;
  ext_launchpad_with_row_labels?: boolean | TemplateItem;
  ext_launchpad_title_shown_on_board?: string | TemplateItem;
  ext_launchpad_overlay_image?: {
    path: string;
    scale: number;
    yOffset: number;
  };
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

  // This isn't standard complaint. The standard is mainly focused on linking boards via button presses
  // which makes sense for digital boards but not for paper resources. Sometime we can switch to the standard
  // but for now lets stick to the convient way rather than perfect complaince
  pages: Array<Page>;
  images: Array<Image>;
};
