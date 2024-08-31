import { DefaultTheme } from "@react-navigation/native";
import { Platform } from "react-native";

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const manropeRegular = "../assets/fonts/Manrope-Regular.ttf";

export const traderThemeLight = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
  fonts: {
    regular: "manropeRegular",
    // web: {
    //   regular: {
    //     fontFamily: WEB_FONT_STACK,
    //     fontWeight: "400",
    //   },
    //   medium: {
    //     fontFamily: WEB_FONT_STACK,
    //     fontWeight: "500",
    //   },
    //   bold: {
    //     fontFamily: WEB_FONT_STACK,
    //     fontWeight: "600",
    //   },
    //   heavy: {
    //     fontFamily: WEB_FONT_STACK,
    //     fontWeight: "700",
    //   },
    // },
    // ios: {
    //   regular: {
    //     fontFamily: "System",
    //     fontWeight: "400",
    //   },
    //   medium: {
    //     fontFamily: "System",
    //     fontWeight: "500",
    //   },
    //   bold: {
    //     fontFamily: "System",
    //     fontWeight: "600",
    //   },
    //   heavy: {
    //     fontFamily: "System",
    //     fontWeight: "700",
    //   },
    // },
    // default: {
    //   regular: {
    //     fontFamily: manropeRegular,
    //     fontWeight: "normal",
    //   },
    //   medium: {
    //     fontFamily: manropeRegular,
    //     fontWeight: "normal",
    //   },
    //   bold: {
    //     fontFamily: manropeRegular,
    //     fontWeight: "600",
    //   },
    //   heavy: {
    //     fontFamily: manropeRegular,
    //     fontWeight: "700",
    //   },
    // },
  },
};

const traderThemeDark = {};
