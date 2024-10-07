import React from "react";
import { Tabs } from "expo-router";

const MainTabs = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
    </Tabs>
  );
};

export default MainTabs;
