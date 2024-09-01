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
      <View style={{}}>
        <View style={{ height: 40 }}></View>
        <DashFunctionBtns label={"Averaging"}></DashFunctionBtns>
        <DashFunctionBtns label={"Profit/Loss"}></DashFunctionBtns>
        <DashFunctionBtns label={"Fixed Income Return"}></DashFunctionBtns>
        <DashFunctionBtns label={"Compounding Returns"}></DashFunctionBtns>
      </View>
    </ScrollView>
  );
}
