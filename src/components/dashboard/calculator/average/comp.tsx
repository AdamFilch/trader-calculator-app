import { Typography } from "@/src/components/common/Typography";
import { TextInput, View } from "react-native";
import { AverageArray } from "@/src/lib/interfaces/Average";

interface InputProps {
  val: AverageArray;
}

export function InputArray({ val }: InputProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderColor: "blue",
        borderWidth: 1,
      }}
    >
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
