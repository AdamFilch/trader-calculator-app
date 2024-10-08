import {
  Box,
  Button,
  Divider,
  Heading,
  SafeAreaView,
  Text,
} from "@gluestack-ui/themed";
import { PureComponent, useMemo, useState } from "react";
import { ExpandableCalendar } from "react-native-calendars";
import { formatDateISO } from "../common/time-display";

export function CalendarShowcase() {
  const [selected, setSelectedDate] = useState("");

  const calendar = useMemo(
    () => (
      <ExpandableCalendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        futureScrollRange={0}
        pastScrollRange={12}
      />
    ),
    [selected]
  );

  return (
    <SafeAreaView marginVertical={10}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginHorizontal={15}
      >
        <Heading size="sm">Days you traded</Heading>
        <Button variant="link" size="xs">
          <Text>Expand</Text>
        </Button>
      </Box>
      <Divider />
      {/* {calendar} */}
    </SafeAreaView>
  );
}
