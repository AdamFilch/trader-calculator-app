import { View } from "react-native";
import {
  CurrentTime,
  dateifyMe,
  getCurrentTime,
  getHowLongTill,
  timeIsAfter,
} from "../../common/time-display";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import {
  getNextMarketHolidays,
  useMarketData,
  useMarketHolidays,
} from "@/src/hooks/useMarketData";
import { useEffect, useState } from "react";

export function ClockDisplay() {
  const diary = {
    market: "XIDX",
  };
  const { market } = useMarketData(diary.market);
  const [CT, setCT] = useState(getCurrentTime());
  const [upcomming, setUpcomming] = useState({
    from: CT,
    to: market.open_time,
    upc: "Open",
  });

  // const nextSession = getNextSession();
  const nextHoliday = getNextMarketHolidays(diary.market, 2);
  console.log("getNextMH", CT);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeIsAfter({ from: CT, to: market.close_time })) {
        // Is current time after closing time?
        setUpcomming({
          ...upcomming,
          to: market.open_time,
          upc: "closed",
        });
      } else if (timeIsAfter({ from: CT, to: market.open_time })) {
        // Is current time after open time?
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
  const addOne = parseInt(hlt[1]) > 30 ? 1 : 0;

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
        {parseInt(hlt[0]) > 0
          ? `${parseInt(hlt[0]) + addOne} Hrs`
          : `${hlt[1]} Mins`}{" "}
        till next Session
      </Text>
    </View>
  );
}

export function getNextSession(): string {
  const { market } = useMarketData("XIDX");

  const today = new Date().toISOString();
  console.log("ClockDisplay", today);

  return "";
}
