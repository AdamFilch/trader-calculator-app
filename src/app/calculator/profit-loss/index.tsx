import { Typography } from "@/src/components/common/Typography";
import React, { useState } from "react";
import { ScrollView, TextInput, View } from "react-native";
import { ProfitLossResults } from "./result";

type Props = {};

export default function ProfitLossReturnCalculator(props: Props) {
  const [boughtFor, setBooughtFor] = useState("");
  const [soldFor, setSoldFor] = useState("");
  const [lotSize, setLotSize] = useState("");

  return (
    <ScrollView>
      <View style={{ marginHorizontal: 30 }}>
        <ProfitLossResults />
        <Typography>ProfitLossReturnCalculator</Typography>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            borderColor: "blue",
            borderWidth: 1,
            paddingHorizontal: 4,
            paddingVertical: 10,
            borderRadius: 4,
          }}
        >
          <View>
            <Typography>Buy For</Typography>
            <View
              style={{
                borderColor: "blue",
                borderWidth: 1,
                paddingHorizontal: 4,
                paddingVertical: 2,
                borderRadius: 4,
              }}
            >
              <TextInput
                keyboardType="numeric"
                value={boughtFor.toString()}
                onChangeText={(text) => {
                  setBooughtFor(text);
                }}
                maxLength={10}
              />
            </View>
          </View>
          <View>
            <Typography>Sell For</Typography>
            <View
              style={{
                borderColor: "blue",
                borderWidth: 1,
                paddingHorizontal: 4,
                paddingVertical: 2,
                borderRadius: 4,
              }}
            >
              <TextInput
                keyboardType="numeric"
                value={soldFor.toString()}
                onChangeText={(text) => {
                  setSoldFor(text);
                }}
                maxLength={10}
              />
            </View>
          </View>
          <View>
            <Typography>Lot Size</Typography>
            <View
              style={{
                borderColor: "blue",
                borderWidth: 1,
                paddingHorizontal: 4,
                paddingVertical: 2,
                borderRadius: 4,
              }}
            >
              <TextInput
                keyboardType="numeric"
                value={lotSize.toString()}
                onChangeText={(text) => {
                  setLotSize(text);
                }}
                maxLength={10}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
