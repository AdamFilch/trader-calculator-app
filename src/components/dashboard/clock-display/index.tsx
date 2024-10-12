import { View } from "react-native";
import { Typography } from "../../common/Typography";
import {
  CurrentTime,
  dateifyMe,
  getCurrentTime,
  getHowLongTill,
  timeIsAfter,
} from "../../common/time-display";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { useMarketData, useMarketHolidays } from "@/src/hooks/useMarketData";
import { useEffect, useState } from "react";

export function ClockDisplay() {
  const diary = {
    market: "XNYS",
  };
  const { market } = useMarketData(diary.market);
  const [CT, setCT] = useState(getCurrentTime());

  const [upcomming, setUpcomming] = useState({
    from: CT,
    to: market.open_time,
    upc: "Open",
  });

  const nextSession = getNextSession();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeIsAfter({ from: CT, to: market.close_time })) {
        setUpcomming({
          ...upcomming,
          to: market.open_time,
          upc: "closed",
        });
      } else if (timeIsAfter({ from: CT, to: market.open_time })) {
        setUpcomming({
          ...upcomming,
          to: market.close_time,
          upc: "open",
        });
      }
      setCT(getCurrentTime());
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

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
        The market is now{" "}
        <Text color="$backgroundDarkError">{upcomming.upc}!</Text>
      </Text>
      <Text>
        {parseInt(hlt[0]) > 0 ? `${hlt[0]} Hrs` : `${hlt[1]} Mins`} till next
        Session
      </Text>
    </View>
  );
}

export function getNextSession(): string {
  const { market } = useMarketData("XIDX");

  const today = new Date().toISOString();
  // console.log("ClockDisplay", today);
  
  return "";
}
