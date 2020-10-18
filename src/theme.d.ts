import { TextStyle } from "react-native";

export type ThemeConfig = {
  API_URI: string;
  ENV: "dev" | "prod";
  VERSION: string;
  NAME: string;
  documentLabels: string[];
  email: string;
  LYDIA_PROVIDER_TOKEN: string;
  LYDIA_PROVIDER_TOKEN_TEST: string;
  LYDIA_VENDOR_TOKEN: string;
  LYDIA_HOMOLOGATION: string;
  LYDIA_PROD: string;
  LYDIA_TEST: string;
  LYDIA_PHONE_HOMOLOGUATION: string;
};

export interface Theme {
  colors: {
    primary: string;
    primarydark: string;
    primarylight: string;
    dark: string;
    darklighter: string;
    darklightest: string;
    secondarydark: string;
    secondary: string;
    secondarylight: string;
    label: string;
    accent: string;
    error: string;
    success: string;
    pending: string;
  };
  font: {
    fontFamily: {
      regular: string;
    };
    text: TextStyle;
    header: TextStyle;
    subHeader: TextStyle;
    label: TextStyle;
  };
  config: ThemeConfig;
}
