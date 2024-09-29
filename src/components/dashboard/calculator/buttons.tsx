import { Pressable, View } from "react-native";
import { Divider } from "../../common/CustomUI";
import { Typography } from "../../common/Typography";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Href, useRouter } from "expo-router";

type DashFuncProps = {
  label: string;
  children?: any;
  caption?: string;
  link: string;
};

export default function CalculatorButton({
  label,
  children,
  caption,
  link,
}: DashFuncProps) {
  const router = useRouter();
  const path: any = `/calculator/${link}`;
  return (
    <View
      style={{
        marginHorizontal: 15,
        borderRadius: 10,
        display: "flex",
        backgroundColor: "#DFE4EA",
      }}
    >
      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 15,
        }}
        onPress={() => {
          router.push(path);
        }}
      >
        <View style={{ display: "flex", justifyContent: "center" }}>
          {children}
        </View>
        <View style={{ flexGrow: 1 }}>
          <Typography style={{ fontSize: 15, lineHeight: 18 }}>
            {label}
          </Typography>
          <Typography
            style={{
              fontSize: 10,
              lineHeight: 14,
              fontFamily: "Inter",
            }}
          >
            {caption}
          </Typography>
        </View>
        <View style={{ display: "flex", justifyContent: "center" }}>
          <MaterialIcons name="chevron-right" size={20} />
        </View>
      </Pressable>
    </View>
  );
}
