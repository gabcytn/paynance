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
					tabBarActiveTintColor: colors.mainColor,
          tabBarIcon: ({ focused }) => 
						<TabBarIcon size={25} name={"podium"} color={ focused ? colors.mainColor : colors.greyWhite}/>
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
					tabBarActiveTintColor: colors.mainColor,
          tabBarIcon: ({ focused }) => 
						<TabBarIcon size={25} name={"time"} color={ focused ? colors.mainColor : colors.greyWhite}/>
        }}
      />
    </Tabs>
  );
};

export default MainTabs;
