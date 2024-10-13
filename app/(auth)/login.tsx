import {
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import MainButton from "@/components/MainButton";
import InputBox from "@/components/InputBox";
import colors from "@/colors";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleLogin() {
    console.log(`Username: ${username} \n Password: ${password}`);
  }
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>
        Welcome to <Text style={{ color: colors.mainColor }}>Paynance</Text>
      </Text>
      <Text style={styles.subTitle}>Start tracking your money</Text>
      <InputBox
        placeholder="Email"
        isSecure={false}
        styles={styles}
        value={username}
        setValue={setUsername}
      />
      <InputBox
        placeholder="Password"
        isSecure={true}
        styles={styles}
        value={password}
        setValue={setPassword}
      />
      <MainButton
        text="Login"
        styles={styles}
        touchOpacity={0.7}
        onPress={handleLogin}
      />
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
    backgroundColor: colors.offWhite,
  },
  mainText: {
    fontFamily: "Poppins",
    fontSize: 21,
  },
  subTitle: {
    fontFamily: "Poppins",
    fontSize: 12,
    marginTop: -5,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginVertical: 5,
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 100,
    backgroundColor: colors.mainColor,
    borderRadius: 7,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins",
    textTransform: "uppercase",
    color: colors.offWhite,
  },
});
