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
declare type StringFieldType = "text" | "multiline" | "password" | "divider" | "comment" | "document" | "picker" | "price" | "qcm" | "link" | "color";
declare type NumberFieldType = "mark";
declare type DateFieldType = "date";
declare type BooleanFieldType = "switch";
export declare type FieldType = StringFieldType | NumberFieldType | DateFieldType | BooleanFieldType;
/**
 * @deprecated
 */
export declare type DEPRECATED_OneIDField = Field | PickerField | PriceField;
declare type BasicField = {
    type: FieldType;
    key: string;
    title: string;
    required?: boolean;
};
export interface TextField extends BasicField {
    type: "text" | "comment" | "divider" | "password" | "multiline" | "color";
}
export interface PickerField extends BasicField {
    type: "picker" | "qcm";
    values: string[];
    labels: string[];
    limits?: number[];
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
    limits?: number[];
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
export interface LinkField extends BasicField {
    type: "link";
    value: string;
    required: false | undefined;
}
export declare type OneIDField = TextField | LinkField | PickerField | PriceField | NumberField | DateField | DocumentField | BooleanField;
export {};
//# sourceMappingURL=field.d.ts.map