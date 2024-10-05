import { Typography } from "@/src/components/common/Typography";
import CalendarShowcase from "@/src/components/diary/CalendarView";
import { DiaryBody, MyTrades } from "@/src/components/diary/DiaryBody";
import { DiaryHeader } from "@/src/components/diary/DiaryHeader";
import { ScrollView } from "@gluestack-ui/themed";
import { View } from "react-native";

export default function DiaryPage() {
  return (
    <ScrollView>
      <DiaryHeader />
      <CalendarShowcase />
      <DiaryBody />
    </ScrollView>
  );
}
