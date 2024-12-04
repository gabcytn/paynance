import React, { useEffect } from "react";
import * as SQLite from "expo-sqlite";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();
async function createTables(db: SQLite.SQLiteDatabase) {
  await db.execAsync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS assets (
      id INTEGER PRIMARY KEY NOT NULL, 
      cash INTEGER DEFAULT 0, 
      gcash REAL DEFAULT 0, 
      debit REAL DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS income (
      id INTEGER NOT NULL,
      amount REAL,
      category VARCHAR(50),
      date TEXT DEFAULT CURRENT_DATE,
      FOREIGN KEY (id) REFERENCES assets(id)
    );

    CREATE TABLE IF NOT EXISTS expense (
      id INTEGER NOT NULL,
      amount REAL,
      category VARCHAR(50),
      date TEXT DEFAULT CURRENT_DATE,
      FOREIGN KEY (id) REFERENCES assets(id)
    );
  `);
}
const RootLayout = () => {
  const [loaded] = useFonts({
    Poppins: require("@/assets/fonts/Poppins.ttf"),
    PoppinsBold: require("@/assets/fonts/Poppins-SemiBold.ttf"),
  });
  useEffect(() => {
    const createDatabase = async () => {
      try {
        const db = await SQLite.openDatabaseAsync("expensesdb");
        createTables(db)
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
