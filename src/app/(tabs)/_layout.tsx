import React from "react";

import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { HouseIcon, Search, Settings2Icon } from "lucide-react-native";
import HomeScreen from ".";
import TabTwoScreen from "./explore";

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
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => <HouseIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        component={Search}
        options={{
          title: "search",
          tabBarIcon: ({ color, focused }) => <Search color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        component={TabTwoScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => <Settings2Icon color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
}
