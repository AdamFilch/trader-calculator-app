import { View } from "react-native";
import { Typography } from "../../common/Typography";
import { Box, Card } from "@gluestack-ui/themed";

export default function DashboardDiarySummary() {
  return (
    <Card
      style={{
        height: 300,
        backgroundColor: "#DFE4EA",
        borderRadius: 10,
        margin: 15,
      }}
    >
      <Typography>Trading Summary</Typography>
      <Typography>Currently Holding</Typography>
      <Typography>Most Recent Trades</Typography>
    </Card>
  );
}
