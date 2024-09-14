import { Typography } from "@/src/components/common/Typography";
import { TextInput, View } from "react-native";
import { AverageArray } from "@/src/lib/interfaces/Average";
import { useState } from "react";
import { useAverageStore } from "./lib";

interface InputProps {
  val: AverageArray;
}

export function InputArray({ val }: InputProps) {
  // const [stockPr, setStockPrice] = useState(val.stock_price || "");
  // const [lotSiz, setLotSize] = useState(val.stock_price || "");
  const { add_ls, add_sp } = useAverageStore();

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
          <TextInput
            keyboardType="numeric"
            value={val.stock_price}
            onChangeText={(text) => {
              add_sp(val.id, text);
            }}
            maxLength={10}
          />
        </View>
      </View>
      <View>
        <Typography>Lot Size</Typography>
        <View>
          <TextInput
            keyboardType="numeric"
            value={val.lot_size.toString()}
            onChangeText={(text) => {
              add_ls(val.id, text);
            }}
            maxLength={10}
          />
        </View>
      </View>
    </View>
  );
}
