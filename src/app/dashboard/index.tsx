import { ScrollView, View } from "react-native";
import DashFunctionBtns from "@/src/components/dashboard/buttons";

export default function DashboardPage() {
  const calcFuncs = [
    { label: "Averaging", caption: "Ex. Average Down, Dollar Cost Averaging" },
    { label: "Profit/Lost", caption: "Calculate returns of trades made" },
    {
      label: "Fixed Income Returns",
      caption: "Estimate Fixed Income Returns",
    },
    {
      label: "Compounding Interest",
      caption: "Estimate Compounding Interest",
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
          <View
            style={{
              height: 300,
              backgroundColor: "#DFE4EA",
              flex: 3,
              borderRadius: 10,
            }}
          ></View>
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
          />
        ))}
      </View>
    </ScrollView>
  );
}
