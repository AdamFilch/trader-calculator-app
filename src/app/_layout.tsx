import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../../localization/i18n";
import { useColorScheme } from "@/src/hooks/useColorScheme";
import { TraderThemeProvider } from "../constants/TraderThemeContext";

import { Inter_600SemiBold } from "@expo-google-fonts/inter";
import { SQLiteProvider } from "expo-sqlite";
import { dbName, initDatabase } from "@/backend/scripts/sqlite";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: Inter_600SemiBold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SQLiteProvider
      databaseName={dbName}
      assetSource={{ assetId: require("../../assets/trader_diary_db.db") }}
      onInit={initDatabase}
    >
      <TraderThemeProvider>
        <Stack
          screenOptions={
            {
              // headerShown: false,
            }
          }
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </TraderThemeProvider>
    </SQLiteProvider>
  );
}
