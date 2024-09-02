import { Pressable, View } from "react-native";
import { Divider } from "../common/CustomUI";
import { Typography } from "../common/Typography";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type DashFuncProps = {
  label: string;
  children?: any;
  caption?: string;
};

export default function DashFunctionBtns({
  label,
  children,
  caption,
}: DashFuncProps) {
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

          // borderBottomColor: "black",
          // borderBottomWidth: 0.5,
        }}
        onPress={() => {
          console.log("DashFunction", label);
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
            style={{ fontSize: 10, lineHeight: 14, fontFamily: "InterRegular" }}
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
