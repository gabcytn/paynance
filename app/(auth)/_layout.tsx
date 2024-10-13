import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        statusBarTranslucent: true,
        statusBarStyle: "dark",
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="register"
        options={{
          headerBackButtonMenuEnabled: true,
          headerShown: true,
          headerTransparent: true,
          title: "",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
