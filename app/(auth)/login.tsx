import {
  Platform,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

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
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome, back!</Text>
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
      <TouchableOpacity onPress={handleLogin}>
        <Text>SIGN IN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
