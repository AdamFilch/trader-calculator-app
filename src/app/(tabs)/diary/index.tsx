import { mockDates } from "@/src/constants/MockData";
import { ScrollView } from "@gluestack-ui/themed";
import { CalendarProvider } from "react-native-calendars";
import diary from "@/src/components/diary";

export default function DiaryPage() {
  return (
    <ScrollView>
      <CalendarProvider date={mockDates[0].title}>
        <diary.CalendarShowcase />
        <diary.DiaryHeader />
        <diary.DiaryBody />
      </CalendarProvider>
    </ScrollView>
  );
}
