import { Typography } from "@/src/components/common/Typography";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, View } from "react-native";
import { useAverageStore } from "@/src/components/dashboard/calculator/average/context";
import { ScrollView } from "@gluestack-ui/themed";
import Average from "@/src/components/dashboard/calculator/average";

export default function AverageReturnCalculator() {
  const averageArrays = useAverageStore((s) => s.averages_array);
  const add_array = useAverageStore((s) => s.add_array);
  const delete_array = useAverageStore((s) => s.delete_array);
  return (
    <ScrollView>
      <View style={{ margin: "auto" }}>
        <View>
          <Average.Results />
        </View>
        <Typography>AverageReturnCalculator</Typography>
        <View>
          {averageArrays.map((arr) => (
            <Average.InputArray val={arr} key={arr.id} />
          ))}
        </View>
        <View>
          <Pressable>
            <View>
              <MaterialIcons
                name="add"
                onPress={() => {
                  add_array();
                }}
              />
            </View>
          </Pressable>
          <Pressable>
            <View>
              <MaterialIcons
                name="delete"
                onPress={() => {
                  delete_array(averageArrays.length);
                }}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
