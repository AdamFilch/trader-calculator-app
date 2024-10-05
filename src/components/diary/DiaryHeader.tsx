import { View } from "react-native";
import { Typography } from "../common/Typography";
import { Icon } from "../common/CustomUI";
import { Box, Center, HStack, Text, VStack } from "@gluestack-ui/themed";

export function DiaryHeader() {
  return (
    <HStack
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginTop: 40,
      }}
    >
      <Text></Text>
      <Typography style={{ fontSize: 18, fontWeight: "600" }}>
        Report Book Name
      </Typography>
      <Icon icon={"keyboard-arrow-down"} size="medium" />
    </HStack>
  );
}
