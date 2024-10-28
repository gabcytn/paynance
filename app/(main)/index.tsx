import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/colors";

type sqlReturn = {
  id: number;
  cash: number;
  gcash: number;
  debit: number;
};

const Dashboard = () => {
  const [userID, setUserID] = useState<number>();
  const [DB, setDB] = useState<SQLite.SQLiteDatabase>();
  const [cash, setCash] = useState(0);
  const [gCash, setGCash] = useState(0);
  const [debit, setDebit] = useState(0);
  const [sumMoney, setSumMoney] = useState(cash + gCash + debit);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        router.replace("../(auth)/login");
        return;
      } else {
        const id = await AsyncStorage.getItem("id");
        setUserID(Number(id));
        const db = await SQLite.openDatabaseAsync("expensesdb");
        setDB(db);
        db.execAsync(`PRAGMA journal_mode = WAL; 
          CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMIARY KEY NOT NULL, cash INTEGER, gcash DOUBLE, debit DOUBLE)`);
      }
    };
    const setExpenseValues = async () => {
      const firstRow: sqlReturn | null | undefined = await DB?.getFirstAsync(
        `SELECT * FROM expenses WHERE id = ?`,
        [userID!]
      );
      setCash(firstRow!.cash);
      setGCash(firstRow!.gcash);
      setDebit(firstRow!.debit);
      setSumMoney(cash + gCash + debit);
    };
    checkLoginStatus();
    setExpenseValues();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.appName}>Paynance</Text>
        <Text style={[styles.fontPoppins, styles.overallMoney]}>
          P{sumMoney}
        </Text>
        <View style={styles.individualAccountsContainer}>
          <View style={styles.individualAccount}>
            <Text style={[styles.fontPoppins]}>P{cash}</Text>
            <Text style={[styles.fontPoppins]}>Cash</Text>
          </View>
          <View style={styles.individualAccount}>
            <Text style={[styles.fontPoppins]}>P{gCash}</Text>
            <Text style={[styles.fontPoppins]}>GCash</Text>
          </View>
          <View style={styles.individualAccount}>
            <Text style={[styles.fontPoppins]}>P{debit}</Text>
            <Text style={[styles.fontPoppins]}>Debit</Text>
          </View>
        </View>
      </SafeAreaView>
      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <Ionicons name="add" size={30} color={colors.offWhite} />
      </Pressable>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  fontPoppins: {
    fontFamily: "Poppins",
  },
  appName: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
    color: colors.mainColor,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: colors.mainColor,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  overallMoney: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  individualAccountsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  individualAccount: {},
  button: {
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 100,
    backgroundColor: colors.mainColor,
    borderRadius: 7,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins",
    color: colors.offWhite,
  },
});
