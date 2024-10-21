import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [loaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins.ttf"),
    PoppinsBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
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
    <Stack
      screenOptions={{
        statusBarTranslucent: true,
        headerShown: false,
        statusBarStyle: "dark",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
};

export default RootLayout;
