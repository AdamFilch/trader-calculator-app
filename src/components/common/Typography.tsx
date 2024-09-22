import { Text, type TextProps, StyleSheet } from "react-native";

export type TypographyProps = TextProps & {
  variant?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
};

export function Typography({ style, variant, ...props }: TypographyProps) {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { fontFamily: "Inter" },
        // { color },
        variant === "default" ? styles.default : undefined,
        variant === "title" ? styles.title : undefined,
        variant === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        variant === "subtitle" ? styles.subtitle : undefined,
        variant === "link" ? styles.link : undefined,
        variant === "h1" ? styles.h1 : undefined,
        variant === "h2" ? styles.h2 : undefined,
        variant === "h3" ? styles.h3 : undefined,
        variant === "h4" ? styles.h4 : undefined,
        variant === "h5" ? styles.h5 : undefined,
        variant === "h6" ? styles.h6 : undefined,
        style,
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  h1: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  h2: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  h3: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  h4: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  h5: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
  h6: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
