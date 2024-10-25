import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import MainButton from "@/components/MainButton";
import colors from "@/colors";
const logout = async () => {
  await AsyncStorage.clear();
  router.replace("../(auth)/login");
};
const History = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>History</Text>
      <MainButton
        text="Logout"
        touchOpacity={0.8}
        onPress={logout}
        styles={styles}
      />
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    color: colors.offWhite,
  },
});
