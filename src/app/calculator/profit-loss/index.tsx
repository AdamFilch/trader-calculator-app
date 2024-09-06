import { Typography } from "@/src/components/common/Typography";
import React from "react";
import { ScrollView, View } from "react-native";

type Props = {};

export default function ProfitLossReturnCalculator(props: Props) {
  return (
    <ScrollView>
      <View style={{ margin: "auto" }}>
        <Typography>ProfitLossReturnCalculator</Typography>
      </View>
    </ScrollView>
  );
}
