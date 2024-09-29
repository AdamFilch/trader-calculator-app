import { Typography } from "@/src/components/common/Typography";
import CalendarShowcase from "@/src/components/diary/diarytab";
import { View } from "react-native";

export default function DiaryPage() {
  return (
    <View>
      <Typography>Diary</Typography>
      <CalendarShowcase />
    </View>
  );
}
