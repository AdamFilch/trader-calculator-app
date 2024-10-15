import { Typography } from "@/src/components/common/Typography";
import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import { useProfitLossStore } from "../../../components/dashboard/calculator/profit-loss/context";
import ProfitLoss from "@/src/components/dashboard/calculator/profit-loss";
import {
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";

export default function ProfitLossReturnCalculator() {
  const boughtFor = useProfitLossStore((s) => s.profitloss.bought_for);
  const soldFor = useProfitLossStore((s) => s.profitloss.sold_for);
  const lotSize = useProfitLossStore((s) => s.profitloss.lot_size);
  const { add_bf, add_ls, add_sf, calculate } = useProfitLossStore();

  function validate() {
    calculate();
  }

  return (
    <View style={{ marginHorizontal: 30 }}>
      <ProfitLoss.Results />
      <Text>ProfitLossReturnCalculator</Text>
      <VStack>
        <HStack space="md">
          <View style={{ flex: 1 }}>
            <Text>Buy For</Text>
            <Input>
              <InputField
                keyboardType="numeric"
                value={boughtFor}
                onChangeText={(text) => {
                  add_bf(text);
                  validate();
                }}
                maxLength={10}
              />
            </Input>
          </View>

          <View style={{ flex: 1 }}>
            <Text>Lot Size</Text>
            <Input>
              <InputField
                keyboardType="numeric"
                value={lotSize}
                onChangeText={(text) => {
                  add_ls(text);
                  validate();
                }}
                maxLength={10}
              />
            </Input>
          </View>
        </HStack>
        <HStack space="md">
          <View style={{ flex: 1 }}>
            <Text>Sell For</Text>
            <Input>
              <InputField
                keyboardType="numeric"
                value={soldFor}
                onChangeText={(text) => {
                  add_sf(text);
                  validate();
                }}
                maxLength={10}
              />
            </Input>
          </View>
          <View style={{ flex: 1, alignSelf: "flex-end" }}>
            <Button variant="outline">
              <ButtonText>Save to Diary</ButtonText>
            </Button>
          </View>
        </HStack>
      </VStack>
    </View>
  );
}
