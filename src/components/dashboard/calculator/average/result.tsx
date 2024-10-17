import { Typography } from "@/src/components/common/Typography";
import { View } from "react-native";
import { useAverageStore } from "./context";
import { Box, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function Results() {
  const invested = useAverageStore((state) => state.amount_invested);
  const cummAverage = useAverageStore((state) => state.cumm_average);
  const totalLotSize = useAverageStore((state) => state.total_lot_size);
  return (
    <VStack justifyContent="center" marginHorizontal={20}>
      <Heading>AVERAGE REULSTS</Heading>
      <VStack space="md">
        <HStack>
          <Box flex={1}>
            <Text>Amount Invested:</Text>
            <Text size="lg">{invested}</Text>
          </Box>
        </HStack>
        <HStack>
          <Box flex={1}>
            <Text>Total Lot Size: </Text>
            <Text size="lg">{totalLotSize}</Text>
          </Box>
          <Box flex={1}>
            <Text>Cummulative Average:</Text>
            <Text size="lg">{cummAverage}</Text>
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
}

function Graph() {}
