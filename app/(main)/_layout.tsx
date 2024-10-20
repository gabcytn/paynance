import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import colors from "@/colors";
const MainTabs = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused }) => 
						<TabBarIcon size={28} name={"home"} color={ focused ? colors.mainColor : colors.greyWhite}/>
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => 
						<TabBarIcon size={28} name={"time"} color={ focused ? colors.mainColor : colors.greyWhite}/>
        }}
      />
    </Tabs>
  );
};

export default MainTabs;
