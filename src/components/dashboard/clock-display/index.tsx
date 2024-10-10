import { View } from "react-native";
import { Typography } from "../../common/Typography";
import {
  CurrentTime,
  dateifyMe,
  getCurrentTime,
  getHowLongTill,
} from "../../common/time-display";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { useMarketData, useMarketHolidays } from "@/src/hooks/useMarketData";
import { useState } from "react";

export function ClockDisplay() {
  const diary = {
    market: "XTKS",
  };
  const { market } = useMarketData(diary.market);
  const CT = getCurrentTime();
  const [upcommingState, setUpcommingState] = useState({
    type: "",
    time: "",
  });

  const hlt = getHowLongTill({ from: CT, to: market.open_time })?.split(":");

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
      <Text>
        {parseInt(hlt[0]) > 0 ? `${hlt[0]} Hrs` : `${hlt[1]} Mins`} till next
        Session
      </Text>
    </View>
  );
}
