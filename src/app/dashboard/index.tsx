import { ScrollView, View } from "react-native";
import DashFunctionBtns from "@/src/components/dashboard/buttons";
import {
  Bolt,
  ChartNoAxesColumnIncreasing,
  HandCoins,
  Percent,
} from "lucide-react-native";

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
        <DashFunctionBtns label={"Averageing"}>
          <Percent color={"black"} scale={0.8} />
        </DashFunctionBtns>
        <DashFunctionBtns label={"Profit/Loss"}>
          <HandCoins color={"black"} scale={0.8} />
        </DashFunctionBtns>
        <DashFunctionBtns label={"Fixed Income Return"}>
          <Bolt color={"black"} scale={0.8} />
        </DashFunctionBtns>
        <DashFunctionBtns label={"Compounding Returns"}>
          <ChartNoAxesColumnIncreasing color={"black"} scale={0.8} />
        </DashFunctionBtns>
        {/* <View>
          <Text>Average</Text>
        </View>
        <View>
          <Text>Profit/Loss</Text>
        </View>
        <View>
          <Text>Fixed Income Return</Text>
        </View>
        <View>
          <Text>Compounding Returns</Text>
        </View>
        <View>
          <Text>Profit Calculator</Text>
        </View> */}
      </View>
    </ScrollView>
  );
}
