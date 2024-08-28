import React from "react";

import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { HouseIcon, Search, Settings2Icon } from "lucide-react-native";
import HomeScreen from ".";
import TabTwoScreen from "./explore";
import DashboardPage from "../dashboard";

export default function TabLayout() {
  const Tabs = AnimatedTabBarNavigator();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#FFF",
      }}
      appearance={{ tabBarBackground: "black" }}
    >
      <Tabs.Screen
        name="index"
        component={DashboardPage}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }: any) => <HouseIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          title: "search",
          tabBarIcon: ({ color, focused }: any) => <Search color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        component={TabTwoScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }: any) => (
            <Settings2Icon color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
