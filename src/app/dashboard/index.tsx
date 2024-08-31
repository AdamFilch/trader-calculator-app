import { ScrollView, View } from "react-native";
import DashFunctionBtns from "@/src/components/dashboard/buttons";

export default function DashboardPage() {
  return (
    <ScrollView
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View>
        <View style={{ height: 30 }}></View>
        <DashFunctionBtns label={"Averageing"}></DashFunctionBtns>
        <DashFunctionBtns label={"Profit/Loss"}></DashFunctionBtns>
        <DashFunctionBtns label={"Fixed Income Return"}></DashFunctionBtns>
        <DashFunctionBtns label={"Compounding Returns"}></DashFunctionBtns>
      </View>
    </ScrollView>
  );
}
