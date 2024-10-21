import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/colors";

const Dashboard = () => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        router.replace("../(auth)/login");
      }
    };
    checkLoginStatus();
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={ [styles.fontPoppins, styles.overallMoney] }>P5352.86</Text>
        <View style={ styles.individualAccountsContainer }>
          <View style={ styles.individualAccount }> 
            <Text style={[styles.fontPoppins]}>P2,550</Text>
            <Text style={[styles.fontPoppins]}>Cash</Text>
          </View>
          <View style={ styles.individualAccount }> 
            <Text style={[styles.fontPoppins]}>P2,550</Text>
            <Text style={[styles.fontPoppins]}>GCash</Text>
          </View>
          <View style={ styles.individualAccount }> 
            <Text style={[styles.fontPoppins]}>P2,550</Text>
            <Text style={[styles.fontPoppins]}>Debit</Text>
          </View>
        </View>
      </SafeAreaView>
      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <Ionicons name="add" size={30} color={colors.offWhite} />
      </Pressable>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  fontPoppins: {
    fontFamily: "Poppins"
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: colors.mainColor,
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  overallMoney: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  individualAccountsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  individualAccount: {

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
