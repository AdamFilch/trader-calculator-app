import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  AddIcon,
  Box,
  Button,
  ButtonText,
  Card,
  Center,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckIcon,
  Divider,
  Heading,
  HStack,
  Input,
  InputField,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { Typography } from "../common/Typography";
import { useToggle } from "../common/useToggleView";
import { useState } from "react";

export function DiaryBody() {
  return (
    <VStack>
      <DiarySummary />
      <MyCurrentTrades />
      <MyPreviousTrades />
    </VStack>
  );
}

export function MyPreviousTrades() {
  return (
    <VStack
      space="md"
      height={"auto"}
      paddingHorizontal={15}
      paddingVertical={10}
    >
      <Heading size="md">Past Trades</Heading>
      <VStack space="xs">
        {[...Array(3)].map((tr, index) => (
          <HStack key={index} width={"$full"} p={5} paddingHorizontal={5}>
            <VStack flexGrow={1}>
              <Heading size="md">Code</Heading>
              <Text size="sm">Profited: </Text>
            </VStack>
            <VStack width={"auto"}>
              <Text size="sm">Held for 8 Days</Text>
              <Text size="sm">Profited:</Text>
            </VStack>
            {/* <Text size="sm">Lot Size: </Text> */}
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}

export function MyCurrentTrades() {
  const [isActionSheetOpen, toggleIsActionSheetOpen] = useToggle();
  const [isCompleteTrade, setIsCompleteTrade] = useState(false);
  const [newTrade, setNewTrade] = useState({
    lot_size: "",
    bought_for: "",
    sold_for: "",
  });
  return (
    <VStack
      space="md"
      height={"auto"}
      paddingHorizontal={15}
      paddingVertical={10}
    >
      <HStack justifyContent="space-between">
        <Heading size="md">
          Currently holding <Text>8</Text> Trades
        </Heading>
        <Button
          variant="outline"
          size="xs"
          style={{ paddingHorizontal: 7 }}
          onPress={() => {
            toggleIsActionSheetOpen();
          }}
        >
          <AddIcon />
        </Button>
      </HStack>
      <VStack space="xs">
        {[...Array(3)].map((tr, index) => (
          <HStack key={index} width={"$full"} p={5} paddingHorizontal={5}>
            <VStack flexGrow={1}>
              <Heading size="md">Code</Heading>
              <Text size="sm">Invested: </Text>
            </VStack>
            <VStack width={"auto"}>
              <Text size="sm">Held for 8 Days</Text>
            </VStack>
            {/* <Text size="sm">Lot Size: </Text> */}
          </HStack>
        ))}
      </VStack>
      <Actionsheet
        isOpen={isActionSheetOpen}
        onClose={toggleIsActionSheetOpen}
        snapPoints={[90]}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />

            <VStack width={"85%"} space="md" height={"95%"}>
              <Heading style={{ marginTop: 10, textAlign: "center" }}>
                Add a Trade
              </Heading>
              <Text>Amount Invested</Text>
              <Text>Buy Tax</Text>
              <Text>If trade is completed show other trade stuff</Text>
              <View>
                <Text>Stock Name</Text>
                <Input>
                  <InputField
                    keyboardType="numeric"
                    value={newTrade.bought_for}
                    onChangeText={(text) => {
                      setNewTrade({
                        ...newTrade,
                        bought_for: text,
                      });
                    }}
                    maxLength={10}
                  />
                </Input>
              </View>
              <HStack space="md">
                <View style={{ flex: 1 }}>
                  <Text>Buy For</Text>
                  <Input>
                    <InputField
                      keyboardType="numeric"
                      value={newTrade.bought_for}
                      onChangeText={(text) => {
                        setNewTrade({
                          ...newTrade,
                          bought_for: text,
                        });
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
                      value={newTrade.lot_size}
                      onChangeText={(text) => {
                        setNewTrade({
                          ...newTrade,
                          lot_size: text,
                        });
                      }}
                      maxLength={10}
                    />
                  </Input>
                </View>
              </HStack>
              <HStack space="md">
                <View style={{ flex: 1 }}>
                  {isCompleteTrade && (
                    <>
                      <Text>Sell For</Text>
                      <Input>
                        <InputField
                          keyboardType="numeric"
                          value={newTrade.sold_for}
                          onChangeText={(text) => {
                            setNewTrade({
                              ...newTrade,
                              sold_for: text,
                            });
                          }}
                          maxLength={10}
                        />
                      </Input>
                    </>
                  )}
                </View>
                <Checkbox
                  style={{ flex: 1 }}
                  value="completed"
                  onChange={(bool) => {
                    setIsCompleteTrade(bool);
                  }}
                >
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>&ensp;Completed trade</CheckboxLabel>
                </Checkbox>
              </HStack>

              <Button marginTop="auto">
                <ButtonText>Add trade to this diary!</ButtonText>
              </Button>
            </VStack>
          </ActionsheetDragIndicatorWrapper>
        </ActionsheetContent>
      </Actionsheet>
    </VStack>
  );
}

export function DiarySummary() {
  return (
    <Card marginHorizontal={20}>
      <VStack>
        <VStack>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Heading size="sm">Summary</Heading>
            <Button variant="link" size="xs">
              <Text>More</Text>
            </Button>
          </Box>
          <Divider />
          <Text>Total Invested</Text>
          <Text size="sm">Report book opened on 5Th October 2024</Text>
        </VStack>
      </VStack>
    </Card>
  );
}
