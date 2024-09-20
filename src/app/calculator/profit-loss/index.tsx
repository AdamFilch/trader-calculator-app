import { Typography } from "@/src/components/common/Typography";
import React, { useState } from "react";
import { Pressable, ScrollView, TextInput, View } from "react-native";
import { ProfitLossResults } from "../../../components/dashboard/calculator/profit-loss/result";
import { useProfitLossStore } from "../../../components/dashboard/calculator/profit-loss/context";

type Props = {};

export default function ProfitLossReturnCalculator(props: Props) {
  const boughtFor = useProfitLossStore((s) => s.profitloss.bought_for);
  const soldFor = useProfitLossStore((s) => s.profitloss.sold_for);
  const lotSize = useProfitLossStore((s) => s.profitloss.lot_size);
  const { add_bf, add_ls, add_sf, calculate } = useProfitLossStore();

  function validate() {
    calculate();
  }

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
                value={boughtFor}
                onChangeText={(text) => {
                  add_bf(text);
                  validate();
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
                value={soldFor}
                onChangeText={(text) => {
                  add_sf(text);
                  validate();
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
                value={lotSize}
                onChangeText={(text) => {
                  add_ls(text);
                  validate();
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
