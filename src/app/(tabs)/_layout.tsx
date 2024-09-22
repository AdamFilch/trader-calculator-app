import React from "react";

import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import TabTwoScreen from "./explore";
import DashboardPage from "./dashboard";
import HomeScreen from ".";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import settingsPage from "./settings";

export default function TabLayout() {
  const Tabs = AnimatedTabBarNavigator();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#FFF",
      }}
      appearance={{ tabBarBackground: "white" }}
    >
      <Tabs.Screen
        name="index"
        component={DashboardPage}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }: any) => (
            <MaterialCommunityIcons name="home-variant-outline" size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={HomeScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }: any) => (
            <MaterialIcons name="search" size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        component={settingsPage}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }: any) => (
            <MaterialIcons name="settings" size={20} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
