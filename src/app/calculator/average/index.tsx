import { Typography } from "@/src/components/common/Typography";
import { AverageCalculatorResults } from "@/src/components/dashboard/calculator/average/result";
import { AverageArray } from "@/src/components/dashboard/calculator/average/tools";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, ScrollView, View } from "react-native";

type Props = {};

export default function AverageReturnCalculator(props: Props) {
  return (
    <View>
      <View style={{ margin: "auto" }}>
        <View>
          <AverageCalculatorResults />
        </View>
        <Typography>AverageReturnCalculator</Typography>
        <View>
          <AverageArray />
        </View>
        <Pressable>
          <View>
            <MaterialIcons
              name="add"
              onPress={() => {
                console.log("Average Add Arrays");
              }}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
