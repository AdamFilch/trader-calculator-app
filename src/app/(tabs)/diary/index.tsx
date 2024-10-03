import { Typography } from "@/src/components/common/Typography";
import CalendarShowcase from "@/src/components/diary/CalendarView";
import { DiaryHeader } from "@/src/components/diary/DiaryHeader";
import { View } from "react-native";

export default function DiaryPage() {
  return (
    <View>
      <DiaryHeader />
      <CalendarShowcase />
    </View>
  );
}
