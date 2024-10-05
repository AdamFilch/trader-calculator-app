import { View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarShowcase() {
  return (
    <View style={{ marginTop: 30 }}>
      <Calendar
        onDayPress={(day: any) => {
          console.log("Selected Day", day);
        }}
      />
    </View>
  );
}
