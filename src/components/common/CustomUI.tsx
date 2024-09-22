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

interface TypographyProps extends TextProps {
  customStyle?: object;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "caption";
  children: React.ReactNode;
}

export function Icon({}) {
  return;
}
