import { View } from "react-native";
import CalculatorButton from "./buttons";

export default function DashboardCalculator() {
  const calcFuncs = [
    {
      label: "Averaging",
      caption: "Ex. Average Down, Dollar Cost Averaging",
      link: "average",
    },
    {
      label: "Profit/Loss",
      caption: "Calculate returns of trades made",
      link: "profit-loss",
    },
    {
      label: "Fixed Income Returns",
      caption: "Estimate Fixed Income Bonds",
      link: "projection/fixed-income",
    },
    {
      label: "Compounding Interest",
      caption: "Estimate Compounding Interest",
      link: "projection/compounding",
    },
  ];

  return (
    <View id="Calculator" style={{ marginTop: 8, gap: 6 }}>
      {calcFuncs.map((calc, id) => (
        <CalculatorButton
          key={id}
          label={calc.label}
          caption={calc.caption}
          link={calc.link}
        />
      ))}
    </View>
  );
}
