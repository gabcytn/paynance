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
import constants from "@/constants";
const SERVER_URL = process.env.EXPO_PUBLIC_SERVER_URL;
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("Invalid email");
  async function handleRegister() {
    const credentialsArr = [email, password, confirmPassword];
    if (credentialsArr.includes("")) {
      Alert.alert("Incomplete", "Fill out all fields");
    } else if (password.length < 8) setIsPasswordError(true);
    else if (password !== confirmPassword) setIsConfirmPasswordError(true);
    else {
      const res = await fetch(`${SERVER_URL}/register`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (res.status === 409) {
        setIsEmailError(true);
        setEmailErrorMessage("Email already taken");
      } else if (res.status === 200) {
        setIsEmailError(false);
        router.back();
      }
    }
  }
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (isLoggedIn) {
        router.replace("../(main)");
      }
    };

    checkLoginStatus();
  }, []);

  useEffect(() => {
    const regex =
      /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/g;
    if (!regex.test(email) && email) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
      setEmailErrorMessage("Invalid email");
    }
  }, [email]);
  useEffect(() => {
    if ((confirmPassword != password && confirmPassword) || isPasswordError) {
      setIsConfirmPasswordError(true);
    } else {
      setIsConfirmPasswordError(false);
    }
  }, [confirmPassword]);
  useEffect(() => {
    if (password.length < 8 && password) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
  }, [password]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainText}>
          Register to <Text style={{ color: constants.colors.mainColor }}>{constants.names.appName}</Text>
        </Text>
        <Text style={styles.subTitle}>Start tracking your money</Text>
        <InputBox
          placeholder="Email"
          isSecure={false}
          isError={isEmailError}
          styles={styles}
          value={email}
          setValue={setEmail}
          errorMessage={emailErrorMessage}
        />
        <InputBox
          placeholder="Password"
          isSecure={true}
          isError={isPasswordError}
          styles={styles}
          value={password}
          setValue={setPassword}
          errorMessage="Password too short"
        />
        <InputBox
          placeholder="Confirm Password"
          isSecure={true}
          isError={isConfirmPasswordError}
          styles={styles}
          value={confirmPassword}
          setValue={setConfirmPassword}
          errorMessage="Passwords do not match"
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

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: constants.colors.offWhite,
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
    color: constants.colors.mainColor,
    fontSize: 12,
  },
  button: {
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 100,
    backgroundColor: constants.colors.mainColor,
    borderRadius: 7,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins",
    textTransform: "uppercase",
    color: constants.colors.offWhite,
  },
});
