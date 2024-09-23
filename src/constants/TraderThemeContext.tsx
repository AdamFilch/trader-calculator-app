import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useColorScheme } from "react-native";

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const manropeRegular = "../assets/fonts/Manrope-Regular.ttf";

export const traderThemeLight: any = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
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
};

export const traderThemeDark: any = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

const TraderThemeContext = createContext(traderThemeLight);

export const TraderThemeProvider = ({ children }: PropsWithChildren) => {
  const systemScheme = useColorScheme();
  const [isLightMode, setisLightMode] = useState(systemScheme === "dark");

  const toggleTheme = () => {
    setisLightMode(!isLightMode);
  };

  const theme = isLightMode ? traderThemeLight : traderThemeDark;

  return (
    <TraderThemeContext.Provider value={{ theme, isLightMode, toggleTheme }}>
      {children}
    </TraderThemeContext.Provider>
  );
};

export const useTheme = () => useContext(TraderThemeContext);
