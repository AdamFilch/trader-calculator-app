import { View } from "react-native";
import { Typography } from "../../common/Typography";

export default function DashboardDiarySummary() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: "#DFE4EA",
        flex: 1,
        borderRadius: 10,
        margin: 15,
      }}
    >
      <Typography>Trading Summary</Typography>
      <Typography>Currently Holding</Typography>
      <Typography>Most Recent Trades</Typography>
    </View>
  );
}
