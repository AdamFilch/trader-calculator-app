import { ScrollView, View } from "react-native";
import DashFunctionBtns from "@/src/components/dashboard/buttons";
import { ClockDisplay } from "@/src/components/dashboard/clock-display";

export default function DashboardPage({}) {
  const calcFuncs = [
    {
      label: "Averaging",
      caption: "Ex. Average Down, Dollar Cost Averaging",
      link: "average",
    },
    {
      label: "Profit/Lost",
      caption: "Calculate returns of trades made",
      link: "profit-loss",
    },
    {
      label: "Fixed Income Returns",
      caption: "Estimate Fixed Income Returns",
      link: "projection/fixed-income",
    },
    {
      label: "Compounding Interest",
      caption: "Estimate Compounding Interest",
      link: "projection/compounding",
    },
  ];

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
          <View
            style={{
              height: 300,
              backgroundColor: "#DFE4EA",
              flex: 1,
              borderRadius: 10,
            }}
          ></View>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View
            style={{
              height: 100,
              backgroundColor: "#DFE4EA",
              flex: 2,
              borderRadius: 10,
            }}
          ></View>
        </View>
      </View>

      <View id="Calculator" style={{ marginTop: 8, gap: 6 }}>
        {calcFuncs.map((calc, id) => (
          <DashFunctionBtns
            key={id}
            label={calc.label}
            caption={calc.caption}
            link={calc.link}
          />
        ))}
      </View>
    </ScrollView>
  );
}
