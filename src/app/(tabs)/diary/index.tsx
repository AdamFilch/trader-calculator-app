import { Typography } from "@/src/components/common/Typography";
import CalendarShowcase from "@/src/components/diary/CalendarView";
import { DiaryBody, MyTrades } from "@/src/components/diary/DiaryBody";
import { DiaryHeader } from "@/src/components/diary/DiaryHeader";
import { mockDates } from "@/src/constants/MockData";
import { ScrollView } from "@gluestack-ui/themed";
import { View } from "react-native";
import { CalendarProvider } from "react-native-calendars";

export default function DiaryPage() {
  return (
    <ScrollView>
      <CalendarProvider date={mockDates[0].title}>
        <DiaryHeader />
        <CalendarShowcase />
        <DiaryBody />
      </CalendarProvider>
    </ScrollView>
  );
}
