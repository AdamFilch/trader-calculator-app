import { Icon } from "../common/custom-ui";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetIcon,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetSectionHeaderText,
  AddIcon,
  Box,
  Button,
  CheckIcon,
  CircleIcon,
  HStack,
  Text,
} from "@gluestack-ui/themed";
import { useToggle } from "../common/useToggleView";

export function DiaryHeader() {
  const [isPortalOpen, toggleIsPortalOpen] = useToggle(false);
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
          toggleIsPortalOpen(true);
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Report Book Name
        </Text>
        <Icon icon={"keyboard-arrow-down"} size="medium" />
      </Button>
      <Actionsheet isOpen={isPortalOpen} onClose={toggleIsPortalOpen}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetSectionHeaderText>
            Switch Diary
          </ActionsheetSectionHeaderText>
          <ActionsheetItem
            onPress={() => {
              console.log("Actionsheet pressed");
            }}
          >
            <HStack space="md" justifyContent="space-between" width={"100%"}>
              <CircleIcon />
              <ActionsheetItemText flex={1}>Diary One</ActionsheetItemText>
              <Box></Box>
            </HStack>
          </ActionsheetItem>
          <ActionsheetItem
            onPress={() => {
              console.log("Actionsheet pressed");
            }}
          >
            <HStack space="md" justifyContent="space-between" width={"100%"}>
              <CircleIcon />
              <ActionsheetItemText flex={1}>Diary Two</ActionsheetItemText>
              <Box></Box>
            </HStack>
          </ActionsheetItem>
          <ActionsheetItem
            onPress={() => {
              console.log("Actionsheet pressed");
            }}
          >
            <HStack space="md" justifyContent="space-between" width={"100%"}>
              <AddIcon />
              <ActionsheetItemText flex={1}>add diary</ActionsheetItemText>
              <CheckIcon />
            </HStack>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </HStack>
  );
}
