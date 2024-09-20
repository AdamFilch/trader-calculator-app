import { Typography } from "@/src/components/common/Typography";
import { View } from "react-native";
import { useAverageStore } from "./context";

export function AverageCalculatorResults() {
  const invested = useAverageStore((state) => state.amount_invested);
  const cummAverage = useAverageStore((state) => state.cumm_average);
  const totalLotSize = useAverageStore((state) => state.total_lot_size);
  return (
    <View>
      <Typography>AVERAGE REULSTS</Typography>
      <View>
        <Typography>Amount Invested: {invested}</Typography>
        <Typography>Cummulative Average: {cummAverage}</Typography>
        <Typography>Total Lot Size: {totalLotSize}</Typography>
      </View>
    </View>
  );
}

function Graph() {}
