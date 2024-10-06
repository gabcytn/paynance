import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        router.replace("../(main)");
      }
    };

    checkLoginStatus();
  });
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
