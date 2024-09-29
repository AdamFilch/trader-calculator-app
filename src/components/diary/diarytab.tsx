import { View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarShowcase() {
  return (
    <View>
      <Calendar
        onDayPress={(day: any) => {
          console.log("Selected Day", day);
        }}
      />
    </View>
  );
}
