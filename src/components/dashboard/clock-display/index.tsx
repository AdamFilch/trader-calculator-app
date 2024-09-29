import { View } from "react-native";
import { Typography } from "../../common/Typography";
import { CurrentTime } from "../../common/time-display";

export function ClockDisplay() {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: "#DFE4EA",
        flex: 2,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Typography style={{ fontSize: 50 }}>
        <CurrentTime />
      </Typography>
    </View>
  );
}
