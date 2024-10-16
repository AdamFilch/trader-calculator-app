import { Typography } from "@/src/components/common/Typography";
import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import { useProfitLossStore } from "../../../components/dashboard/calculator/profit-loss/context";
import ProfitLoss from "@/src/components/dashboard/calculator/profit-loss";
import {
  Button,
  ButtonText,
  Card,
  HStack,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Icon } from "@/src/components/common/custom-ui";
import { useToggle } from "@/src/components/common/useToggleView";
import { DatePicker } from "@/src/components/common/date-picker";

export default function ProfitLossReturnCalculator() {
  const boughtFor = useProfitLossStore((s) => s.profitloss.bought_for);
  const soldFor = useProfitLossStore((s) => s.profitloss.sold_for);
  const lotSize = useProfitLossStore((s) => s.profitloss.lot_size);
  const { add_bf, add_ls, add_sf, calculate } = useProfitLossStore();
  const [isAdvanceOpen, toggleIsAdvanceOpen] = useToggle();

  function validate() {
    calculate();
  }

  return (
    <View style={{ marginHorizontal: 15 }}>
      <ProfitLoss.Results />
      <Card>
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
            <View style={{ flex: 0.5 }}>
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
            <View></View>
          </HStack>
          {isAdvanceOpen && (
            <HStack space="md">
              <View style={{ flex: 1 }}>
                <DatePicker header="Bought on" />
              </View>
              <View style={{ flex: 1 }}>
                <DatePicker header="Sold on" />
              </View>
            </HStack>
          )}
          <HStack justifyContent="space-between" marginTop={10}>
            <Button variant="link" onPress={toggleIsAdvanceOpen}>
              <Icon
                icon="chevron-right"
                size="large"
                style={{
                  transform: isAdvanceOpen ? "rotate(-90deg)" : "rotate(90deg)",
                }}
              />
            </Button>
            <Button variant="solid">
              <ButtonText> Open Diary</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </Card>
    </View>
  );
}
