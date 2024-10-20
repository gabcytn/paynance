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
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/colors";
import MainButton from "@/components/MainButton";

const logout = async () => {
  await AsyncStorage.clear();
  router.replace("../(auth)/login");
};

const Dashboard = () => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        router.replace("../(auth)/login");
      }
    };
    checkLoginStatus();
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Dashboard</Text>
        <MainButton
          text="Logout"
          touchOpacity={0.8}
          onPress={logout}
          styles={styles}
        />
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
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
