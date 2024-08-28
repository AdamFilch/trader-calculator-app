import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { ThemedView } from "@/src/components/ThemedView";
import ToolsButton from "./tools";
import { ScrollView, Text, View } from "react-native";
import { FileX } from "lucide-react-native";

export default function DashboardPage() {
  return (
    <ScrollView
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 30,
      }}
    >
      <View>
        <View style={{ height: 100 }}></View>

        <View>
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
        </View>
      </View>
    </ScrollView>
  );
}
