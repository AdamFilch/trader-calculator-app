import { Typography } from "@/src/components/common/Typography";
import { useFixedIncomeStore } from "@/src/components/dashboard/calculator/projection/fixed-income/context";
import React from "react";
import { ScrollView, TextInput, View } from "react-native";

type Props = {};

export default function FixedIncomeReturnCalculator(props: Props) {
  const state = useFixedIncomeStore((s) => s.state);
  return (
    <ScrollView>
      <View style={{ margin: "auto" }}>
        <Typography>FixedIncomeReturnCalculator</Typography>
      </View>
      <View>
        <View>
          <View>
            <Typography>Yield</Typography>
            <TextInput />
          </View>
          <View>
            <Typography>Tempo</Typography>
            <TextInput />
          </View>
          <View>
            <Typography>Longevity (When finish)</Typography>
            <TextInput />
          </View>
        </View>
        <View>
          <View>
            <Typography>Price per Unit</Typography>
            <TextInput />
          </View>
          <View>
            <Typography>How many units bought every month</Typography>
            <TextInput />
          </View>
          <View>
            <Typography>Yield</Typography>
            <TextInput />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
