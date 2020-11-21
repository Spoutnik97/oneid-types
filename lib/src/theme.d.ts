import { TextStyle } from "react-native";
export declare type ThemeConfig = {
    API_URI: string;
    ENV: "dev" | "prod";
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
export declare type Colors = {
    primary: string;
    primarydark: string;
    primarylight: string;
    secondarydark: string;
    secondary: string;
    secondarylight: string;
    dark: string;
    light: string;
    label: string;
    accent: string;
    error: string;
    success: string;
    pending: string;
    palette: {
        blueDark: string;
        blue: string;
        purple: string;
        red: string;
        orange: string;
        yellow: string;
        green: string;
        teal: string;
        greyLight: string;
        greyDark: string;
    };
};
export declare type Fonts = {
    fontFamily: {
        asap: string;
        regular: string;
        light: string;
        lightItalic: string;
        semiBold: string;
    };
    fontSize: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
    };
    text?: TextStyle;
    header?: TextStyle;
    subHeader?: TextStyle;
    label?: TextStyle;
};
export interface Theme {
    colors: Colors;
    font: Fonts;
    config: ThemeConfig;
}
//# sourceMappingURL=theme.d.ts.map