import { mockDates } from "@/src/constants/MockData";
import {
  Center,
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

export default function CalendarShowcase() {
  return (
    <SafeAreaView marginVertical={10}>
      {/* <Heading size="sm" alignSelf="center">
        View days you traded!
      </Heading> */}
      <ExpandableCalendar
        renderHeader={(date) => {
          return (
            <VStack key={date} alignItems="center">
              <Heading size="sm">View days you traded!</Heading>
              <Text>{formatDateISO({ date, dateFormat: "MMMM yyyy" })}</Text>
            </VStack>
          );
        }}
      />
    </SafeAreaView>
  );
}
