import { Button, Pressable, Text, View } from "react-native";
import { Divider } from "../common/ui";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { Typography } from "../common/Typography";

type DashFuncProps = {
  label: string;
  children?: any;
};

export default function DashFunctionBtns({ label, children }: DashFuncProps) {
  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "column",
        // borderBottomColor: "black",
        // borderBottomWidth: 0.5,
      }}
      onPress={() => {
        console.log("DashFunction", label);
      }}
    >
      <Divider width={0.8} />
      <View
        style={{
          marginVertical: 15,
          paddingHorizontal: 20,
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <View style={{ display: "flex", justifyContent: "center" }}>
          {children}
        </View>
        <Typography style={{ flexGrow: 1 }}>{label}</Typography>
        <View></View>
      </View>
    </Pressable>
  );
}
