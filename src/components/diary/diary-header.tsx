import { Icon } from "../common/custom-ui";
import { Button, HStack, Text } from "@gluestack-ui/themed";

export function DiaryHeader() {
  return (
    <HStack
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        marginTop: 35,
      }}
    >
      <Button
        variant="link"
        onPress={() => {
          console.log("DiaryHeader Change");
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Report Book Name
        </Text>
        <Icon icon={"keyboard-arrow-down"} size="medium" />
      </Button>
    </HStack>
  );
}
