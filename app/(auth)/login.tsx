import {
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import MainButton from "@/components/MainButton";
import colors from "@/colors";
async function handleLogin() {}
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        router.replace("../(main)");
      }
    };

    checkLoginStatus();
  });
  const mainIcon = require("@/assets/images/main-icon.png");
  return (
    <SafeAreaView style={styles.container}>
      <Image source={mainIcon} style={{ width: 75, height: 75 }} />
      <Text style={styles.mainText}>
        Welcome, back to{" "}
        <Text style={{ color: colors.mainColor }}>Paynance</Text>
      </Text>
      <View>
        <TextInput placeholder="Username" onChangeText={setUsername} />
      </View>
      <View>
        <TextInput
          secureTextEntry
          placeholder="Password"
          onChangeText={setPassword}
        />
      </View>
      <MainButton text="Login" styles={styles} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontFamily: "Poppins",
    fontSize: 21,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  text: {
    textAlign: "center",
  },
});
