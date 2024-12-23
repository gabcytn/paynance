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
import constants from "@/constants";
const logout = async () => {
  await AsyncStorage.clear();
  router.replace("../(auth)/login");
};
const History = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>History</Text>
      <MainButton
        text="Logout"
        touchOpacity={0.8}
        onPress={logout}
        styles={styles}
      />
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    color: constants.colors.offWhite,
  },
});
