import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import constants from "@/constants";
const MainTabs = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarActiveTintColor: constants.colors.mainColor,
          tabBarIcon: ({ focused }) =>
            <TabBarIcon size={25} name={"podium"} color={focused ? constants.colors.mainColor : constants.colors.greyWhite} />
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarActiveTintColor: constants.colors.mainColor,
          tabBarIcon: ({ focused }) =>
            <TabBarIcon size={25} name={"time"} color={focused ? constants.colors.mainColor : constants.colors.greyWhite} />
        }}
      />
    </Tabs>
  );
};

export default MainTabs;
