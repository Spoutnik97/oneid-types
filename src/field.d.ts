/**
 * @deprecated use OneIDField =  TextField | NumberField | DateField | PickerField | PriceField instead
 */
export interface Field {
  key: string;
  title: string;
  label: string;
  value: string;
}

/**
 * @deprecated
 */
export interface DEPRECATED_PickerField {
  key: string;
  title: string;
  labels: string[];
  values: string[];
  prices?: number[];
}

type StringFieldType =
  | "text"
  | "password"
  | "divider"
  | "comment"
  | "document"
  | "picker"
  | "price"
  | "qcm";
type NumberFieldType = "mark";
type DateFieldType = "date";
type BooleanFieldType = "switch";

export type FieldType = StringFieldType | NumberFieldType | DateFieldType | BooleanFieldType;

/**
 * @deprecated
 */
export type DEPRECATED_OneIDField = Field | PickerField | PriceField;

type BasicField = {
  key: string;
  title: string;
  required?: boolean;
};

export interface TextField extends BasicField {
  type: "text" | "comment" | "divider" | "password";
}

export interface PickerField extends BasicField {
  type: "picker" | "qcm";
  values: string[];
  labels: string[];
}

export interface DocumentField extends BasicField {
  type: "document";
  documentType?: string;
}

export interface PriceField extends BasicField {
  type: "price";
  values: string[];
  labels: string[];
  prices: number[];
}

export interface NumberField extends BasicField {
  type: "mark";
}

export interface DateField extends BasicField {
  type: "date";
}


export interface BooleanField extends BasicField {
  type: "switch";
}

export type OneIDField =
  | TextField
  | PickerField
  | PriceField
  | NumberField
  | DateField
  | DocumentField
  | BooleanField;
