import { View } from "react-native";
import {
  CurrentTime,
  dateifyMe,
  getCurrentTime,
  getHowLongTill,
  timeIsAfter,
} from "../../common/time-display";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
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
  const [timeLeft, setTimeLeft] = useState(
    getHowLongTill({ from: new Date(), to: market.open_time })?.split(":")
  );
  const [upcomming, setUpcomming] = useState({
    from: CT,
    to: market.open_time,
    upc: "Open",
  });

  // const nextSession = getNextSession();
  const nextHoliday = getNextMarketHolidays(diary.market, 2);
  // const hlt = getHowLongTill({ from: CT, to: market.open_time })?.split(":");
  console.log("testing CLock display", timeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(
        getHowLongTill({ from: new Date(), to: market.open_time })?.split(":")
      );
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <HStack
      style={{
        marginTop: 35,
        marginHorizontal: 15,
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <VStack>
        <Heading size="3xl">
          {timeLeft[0]}:{timeLeft[1]}:{timeLeft[2]}
        </Heading>
        <Text size="sm" marginTop={-10}>
          The market is now{" "}
          <Text color="$backgroundDarkError">{upcomming.upc}!</Text>
        </Text>
        <Text size="sm">
          {parseInt(timeLeft[0]) > 0
            ? `${parseInt(timeLeft[0])} Hrs`
            : `${timeLeft[1]} Mins`}{" "}
          till next Session
        </Text>
      </VStack>
      <VStack>
        <Heading>LOGO</Heading>
      </VStack>
    </HStack>
  );
}

export function getNextSession(): string {
  const { market } = useMarketData("XIDX");

  const today = new Date().toISOString();
  console.log("ClockDisplay", today);

  return "";
}
