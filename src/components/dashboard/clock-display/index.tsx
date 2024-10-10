import { View } from "react-native";
import { Typography } from "../../common/Typography";
import { CurrentTime } from "../../common/time-display";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { useMarketData, useMarketHolidays } from "@/src/hooks/useMarketData";

export function ClockDisplay() {
  const diary = {
    market: "XTKS",
  };
  const { market } = useMarketData(diary.market);
  const { market: holidays } = useMarketHolidays(diary.market);

  return (
    <View
      style={{
        height: 300,
        flex: 2,
        borderRadius: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Heading size="4xl" marginBottom={-10}>
        <CurrentTime twelve />
      </Heading>
      <Text>
        The market is now <Text color="$backgroundDarkError">Open!</Text>
      </Text>
      <Text>5 mins till Close</Text>
    </View>
  );
}
