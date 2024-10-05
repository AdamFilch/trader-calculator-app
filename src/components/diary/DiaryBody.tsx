import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { Typography } from "../common/Typography";

export function DiaryBody() {
  return (
    <VStack>
      <DiarySummary />
      <MyTrades />
    </VStack>
  );
}

export function MyTrades() {
  return (
    <VStack
      space="md"
      // backgroundColor="$white"
      // borderWidth={1}
      // borderColor="black"
      height={"auto"}
      paddingHorizontal={15}
      paddingVertical={10}
    >
      <Heading size="md">
        Currently holding <Text>8</Text> Trades
      </Heading>
      <VStack space="xs">
        {[...Array(3)].map((tr) => (
          <HStack width={"$full"} p={5} paddingHorizontal={5}>
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
