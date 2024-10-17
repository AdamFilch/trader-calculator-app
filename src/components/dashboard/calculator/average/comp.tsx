import { Typography } from "@/src/components/common/Typography";
import { TextInput, View } from "react-native";
import { AverageArray } from "@/src/lib/interfaces/calculator";
import { useState } from "react";
import { useAverageStore } from "./context";
import { useTranslation } from "react-i18next";
import {
  Button,
  Heading,
  HStack,
  Input,
  InputField,
  TrashIcon,
} from "@gluestack-ui/themed";

interface InputProps {
  val: AverageArray;
}

export function InputArray({ val }: InputProps) {
  // const [stockPr, setStockPrice] = useState(val.stock_price || "");
  // const [lotSiz, setLotSize] = useState(val.stock_price || "");
  const { add_ls, add_sp, calculate } = useAverageStore();
  const delete_array = useAverageStore((s) => s.delete_array);
  const t = useTranslation();

  function validate() {
    calculate();
  }

  return (
    <HStack space="md">
      <Heading size="sm" style={{ alignSelf: "center", marginTop: 15 }}>
        {val.id + 1}
      </Heading>

      <View style={{ flex: 1 }}>
        <Typography>Stock Price</Typography>
        <Input>
          <InputField
            keyboardType="numeric"
            value={val.stock_price}
            onChangeText={(text) => {
              add_sp(val.id, text);
              validate();
            }}
            maxLength={10}
          />
        </Input>
      </View>
      <View style={{ flex: 1 }}>
        <Typography>Lot Size</Typography>
        <Input>
          <InputField
            keyboardType="numeric"
            value={val.lot_size.toString()}
            onChangeText={(text) => {
              add_ls(val.id, text);
              validate();
            }}
            maxLength={10}
          />
        </Input>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Button
          variant="link"
          onPress={() => {
            // delete specific lot and stock
            delete_array(val.id);
          }}
        >
          <TrashIcon color="$error800" />
        </Button>
      </View>
    </HStack>
  );
}
