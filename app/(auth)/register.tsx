import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <View>
        <TextInput placeholder="Username" onChangeText={setUsername} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="Confirm password"
          secureTextEntry
          onChangeText={setConfirmPassword}
        />
      </View>
      <TouchableOpacity>
        <Text>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
