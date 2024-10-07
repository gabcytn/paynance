import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
    <SafeAreaView>
      <Text>Login</Text>
      <Text>Welcome, back!</Text>
      <View>
        <TextInput placeholder="Username" />
      </View>
      <View>
        <TextInput secureTextEntry placeholder="Password" />
      </View>
      <TouchableOpacity>
        <Text>SIGN IN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
