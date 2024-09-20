import { Typography } from "@/src/components/common/Typography";
import React, { useState } from "react";
import { View } from "react-native";
import { useProfitLossStore } from "./context";

type Props = {};

export const ProfitLossResults = (props: Props) => {
  const state = useProfitLossStore((state) => state.profitloss);
  return (
    <View style={{ margin: "auto" }}>
      <Typography>Results shown here</Typography>
      <View>
        <Typography>
          Profit/Loss before Transaction Fees: {state.profit.toString()}{" "}
        </Typography>
        <Typography>Investment: {state.modal.toString()}</Typography>
        <Typography>
          Transaction Fee: {state.transaction_fee.toString()}{" "}
        </Typography>
        <Typography>Realised P/L: {state.realised.toString()}</Typography>
        <Typography>Plus/Minus: {state.plus_minus.toString()}</Typography>
      </View>
    </View>
  );
};
