import { Typography } from "@/src/components/common/Typography";
import React from "react";
import { ScrollView, View } from "react-native";

type Props = {};

export default function FixedIncomeReturnCalculator(props: Props) {
  return (
    <ScrollView>
      <View style={{ margin: "auto" }}>
        <Typography>FixedIncomeReturnCalculator</Typography>
      </View>
    </ScrollView>
  );
}
