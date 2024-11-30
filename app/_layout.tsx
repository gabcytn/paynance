import React, { useEffect } from "react";
import * as SQLite from "expo-sqlite";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [loaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins.ttf"),
    PoppinsBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
  });
  useEffect(() => {
    const createDatabase = async () => {
      try {
        const db = await SQLite.openDatabaseAsync("expensesdb");
        db.execAsync(`PRAGMA journal_mode = WAL; 
          CREATE TABLE IF NOT EXISTS expenses (
            id INTEGER PRIMARY KEY NOT NULL, 
            cash INTEGER DEFAULT 0, 
            gcash DOUBLE DEFAULT 0, 
            debit DOUBLE DEFAULT 0)`);
        await db.closeAsync();
      } catch (err) {
        console.error('error in _layout.tsx')
        console.error(err)
      }
    };

    createDatabase();
  }, []);
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
