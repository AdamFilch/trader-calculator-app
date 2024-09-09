import { Typography } from "@/src/components/common/Typography";
import React, { useState } from "react";
import { View } from "react-native";
import { useProfitLossStore } from "./lib";

type Props = {};

export const ProfitLossResults = (props: Props) => {
  const store = useProfitLossStore((state) => state.profitloss);
  return (
    <View style={{ margin: "auto" }}>
      <Typography>Results shown here</Typography>
      <View>
        <Typography>
          Profit/Loss before Transaction Fees: {store.profit.toString()}{" "}
        </Typography>
        <Typography>Investment: {store.modal.toString()}</Typography>
        <Typography>
          Transaction Fee: {store.transaction_fee.toString()}{" "}
        </Typography>
        <Typography>Realised P/L: {store.realised.toString()}</Typography>
        <Typography>Plus/Minus: {store.plus_minus.toString()}</Typography>
      </View>
    </View>
  );
};
