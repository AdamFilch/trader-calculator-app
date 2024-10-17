import React, { useMemo } from "react";
import { View } from "react-native";
import { useAverageStore } from "@/src/components/dashboard/calculator/average/context";
import { Card, HStack, ScrollView } from "@gluestack-ui/themed";
import Average from "@/src/components/dashboard/calculator/average";

export default function AverageReturnCalculator() {
  const averageArrays = useAverageStore((s) => s.averages_array);
  const add_array = useAverageStore((s) => s.add_array);
  const delete_array = useAverageStore((s) => s.delete_array);

  const inputArrays = useMemo(() => {
    return averageArrays.map((arr) => (
      <Average.InputArray val={arr} key={arr.id} />
    ));
  }, [averageArrays]);

  return (
    <ScrollView marginHorizontal={15}>
      <Average.Results />
      <Card>
        {inputArrays}
        <HStack>
          <View style={{ flex: 1 }}>
            {/* <Button
              variant="link"
              onPress={() => {
                add_array();
              }}
            >
              <AddIcon />
            </Button> */}
          </View>
        </HStack>
      </Card>
    </ScrollView>
  );
}
