import { ScrollView, View } from "react-native";
import { ClockDisplay } from "@/src/components/dashboard/clock-display";
import DashboardCalculator from "@/src/components/dashboard/calculator";
import DashboardDiarySummary from "@/src/components/dashboard/diary/summary";

export default function DashboardPage({}) {
  return (
    <ScrollView
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 60,
      }}
    >
      <View
        style={{
          flex: 4,
          margin: 1,
          marginHorizontal: 15,
          borderRadius: 10,
          gap: 10,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <ClockDisplay />
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}></View>
      </View>

      <DashboardCalculator />
      <DashboardDiarySummary />
    </ScrollView>
  );
}
