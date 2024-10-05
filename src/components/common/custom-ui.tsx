import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TextProps, View } from "react-native";

interface DividerProps {
  width?: number;
  orientation?: "horizontal" | "vertical";
  color?: string;
  dividerStyle?: any;
}

export function Divider({
  width = 1,
  orientation = "horizontal",
  color = "#DFE4EA",
  dividerStyle,
}: DividerProps) {
  const dividerStyles = [
    { width: orientation === "horizontal" ? "100%" : width },
    { height: orientation === "vertical" ? "100%" : width },
    { backgroundColor: color },
    dividerStyle,
  ];

  return <View style={dividerStyles} />;
}

type IconProps = TextProps & {
  icon?:
    | keyof typeof MaterialIcons.glyphMap
    | keyof typeof MaterialCommunityIcons.glyphMap
    | any;
  community?: boolean;
  size?: "large" | "medium" | "small";
};

export function Icon({
  style,
  community = false,
  icon = "disabled-by-default",
  size = "medium",
}: IconProps) {
  let iconSize = 20;
  switch (size) {
    case "large":
      iconSize = 30;
      break;
    case "medium":
      iconSize = 20;
      break;
    case "small":
      iconSize = 15;
      break;
  }

  const base = community ? (
    <MaterialCommunityIcons
      name={icon}
      style={[{ fontSize: iconSize }, style]}
    />
  ) : (
    <MaterialIcons name={icon} style={[{ fontSize: iconSize }, style]} />
  );

  return base;
}
