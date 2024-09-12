import { Typography } from "@/src/components/common/Typography";
import { TextInput, View } from "react-native";

export function AverageArray() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
      <View>
        <Typography>Stock Price</Typography>
        <View>
          <TextInput />
        </View>
      </View>
      <View>
        <Typography>Lot Size</Typography>
        <View>
          <TextInput />
        </View>
      </View>
    </View>
  );
}
