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
        <Button
          title="Logout"
          onPress={() => {
            const logout = async () => {
              await AsyncStorage.clear();
              router.replace("../(auth)/login");
            };

            logout();
          }}
        />
      </SafeAreaView>
      <Pressable>
        <Ionicons name="add" />
      </Pressable>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
