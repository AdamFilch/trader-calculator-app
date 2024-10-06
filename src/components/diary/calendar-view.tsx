import { mockDates } from "@/src/constants/MockData";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  SafeAreaView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { View } from "react-native";
import {
  Agenda,
  AgendaList,
  Calendar,
  ExpandableCalendar,
  WeekCalendar,
} from "react-native-calendars";
import { formatDateISO } from "../common/time-display";

export function CalendarShowcase() {
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
      <ExpandableCalendar
        futureScrollRange={0}
        // renderHeader={(date) => {
        //   return (
        //     <VStack key={date.toString("MMMM yyyy")} alignItems="center">
        //       <Heading size="sm">View days you traded!</Heading>
        //       <Text>{formatDateISO({ date, dateFormat: "MMMM yyyy" })}</Text>
        //     </VStack>
        //   );
        // }}
      />
    </SafeAreaView>
  );
}
