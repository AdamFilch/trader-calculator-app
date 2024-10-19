import { FlatList, ScrollView, View } from "react-native";
import { ClockDisplay } from "@/src/components/dashboard/clock-display";
import DashboardCalculator from "@/src/components/dashboard/calculator";
import DashboardDiarySummary from "@/src/components/dashboard/diary/summary";
import { Box, SafeAreaView, VStack } from "@gluestack-ui/themed";
import { DashboardUtilities } from "@/src/components/dashboard/utlities";

export default function DashboardPage({}) {
  return (
    <Box flex={1}>
      <ClockDisplay />
      <ScrollView>
        <DashboardUtilities />
        <DashboardCalculator />
        <DashboardDiarySummary />
      </ScrollView>
    </Box>
  );
}
