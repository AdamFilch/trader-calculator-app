import React from "react";

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabButtonLayout,
} from "react-native-animated-nav-tab-bar";
import DashboardPage from "./dashboard";
import HomeScreen from ".";
import settingsPage from "./settings";
import DiaryPage from "./diary";
import { Icon } from "@/src/components/common/custom-ui";

export default function TabLayout() {
  const Tabs = AnimatedTabBarNavigator();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#FFF",
        labelStyle: "none",
      }}
      appearance={{
        tabBarBackground: "white",
        dotCornerRadius: 10,
        tabButtonLayout: "vertical" as TabButtonLayout,
        dotSize: "small" as DotSize,
        topPadding: 5,
        bottomPadding: 5,
      }}
    >
      <Tabs.Screen
        name="index"
        component={DashboardPage}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }: any) => (
            <Icon community icon="home-variant-outline" size="large" />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={HomeScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }: any) => (
            <Icon icon={"search"} size="large" />
          ),
        }}
      />
      <Tabs.Screen
        name="diary"
        component={DiaryPage}
        options={{
          title: "Diary",
          tabBarIcon: ({ color, focused }: any) => (
            <Icon community icon={"book-outline"} size="large" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        component={settingsPage}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }: any) => (
            <Icon icon={"settings"} size="large" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
