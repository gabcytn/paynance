import {
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  View,
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        <Pressable>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </Pressable>
        <MainButton
          text="Login"
          styles={styles}
          touchOpacity={0.7}
          onPress={handleLogin}
        />
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <Text style={styles.noAccount}>Don't have an account? </Text>
          <Pressable>
            <Text style={styles.createAccount}>Create one.</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  forgotPassword: {
    width: 250,
    textAlign: "right",
    color: colors.mainColor,
    fontFamily: "Poppins",
    fontSize: 12,
    marginEnd: 5,
  },
  noAccount: {
    fontFamily: "Poppins",
    fontSize: 12,
  },
  createAccount: {
    fontFamily: "Poppins",
    color: colors.mainColor,
    fontSize: 12,
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
    textTransform: "uppercase",
    color: colors.offWhite,
  },
});
