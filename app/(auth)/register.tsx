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
  Alert,
} from "react-native";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import MainButton from "@/components/MainButton";
import InputBox from "@/components/InputBox";
import colors from "@/colors";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function handleRegister() {
    const credentialsArr = [username, password, confirmPassword];
    if (credentialsArr.includes(""))
      Alert.alert("Incomplete", "Fill out all of the fields");
    else if (password.length < 8)
      Alert.alert("Password too short", "Minimum length is 8");
    else if (password !== confirmPassword)
      Alert.alert("Passwords do not match!", "Re-enter your password");
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
          Register to <Text style={{ color: colors.mainColor }}>Paynance</Text>
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
        <InputBox
          placeholder="Confirm Password"
          isSecure={true}
          styles={styles}
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        <MainButton
          text="Create"
          styles={styles}
          touchOpacity={0.7}
          onPress={handleRegister}
        />
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <Text style={styles.haveAnAccount}>Already have an account? </Text>
          <Pressable>
            <Link href={"./login"} style={styles.signIn}>
              Sign in.
            </Link>
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
    borderRadius: 6,
    width: 250,
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginVertical: 5,
  },
  haveAnAccount: {
    fontFamily: "Poppins",
    fontSize: 12,
  },
  signIn: {
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
