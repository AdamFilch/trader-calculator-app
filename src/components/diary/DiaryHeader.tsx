import { View } from "react-native";
import { Typography } from "../common/Typography";
import { Icon } from "../common/CustomUI";
import { Box, Center, HStack, VStack } from "@gluestack-ui/themed";

export function DiaryHeader() {
  return (
    <Center
      style={{
        height: 90,
      }}
    >
      <HStack
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          paddingBottom: 10,
        }}
      >
        <Typography style={{ fontSize: 18, fontWeight: "600" }}>
          Report Book Name
        </Typography>
        <Icon icon={"keyboard-arrow-down"} size="medium" />
      </HStack>
      <Box></Box>
    </Center>
  );
}
