import {
  Button,
  CalendarDaysIcon,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { Icon } from "./custom-ui";
import { useRef, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export function DatePicker({ header }: { header: string }) {
  const [inputDate, setInputDate] = useState("dd/mm/yyyy");
  const inputFieldRef = useRef(null);
  return (
    <View>
      <Text>{header}</Text>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Input ref={inputFieldRef}>
          <InputField keyboardType="number-pad" placeholder={inputDate} />
          <InputSlot
            marginRight={10}
            onPress={() => {
              // inputFieldRef?.current.blur();
              console.log("DatePicker input", inputFieldRef);
            }}
          >
            <CalendarDaysIcon size="lg" />
          </InputSlot>
        </Input>
      </TouchableWithoutFeedback>
    </View>
  );
}
