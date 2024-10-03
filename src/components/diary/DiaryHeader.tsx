import { View } from "react-native";
import { Typography } from "../common/Typography";
import { Icon } from "../common/CustomUI";
import { Box, Center, HStack, VStack } from "@gluestack-ui/themed";

export function DiaryHeader() {
  return (
    <Center>
      <HStack>
        <Typography>Report Book Name</Typography>
        <Icon icon={"keyboard-arrow-down"} />
      </HStack>
    </Center>
  );
}
