import React from "react";
import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f7f7f7" barStyle="dark-content" />
      <View style={({}, styles.logoContainer)}>
        <Image style={styles.logo} source={require("./assets/clg.png")} />
      </View>

      <View style={styles.Userbtn}>
        <TouchableOpacity style={styles.btn} onPress={() => alert("It Work ")}>
          <Text style={styles.btnTxt}> Go To Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logoContainer: {
    height: 250,
    width: 250,
    backgroundColor: "#e9e9e8",
    borderRadius: 200,
  },
  logo: {
    height: 150,
    width: 180,
    top: 45,
    left: 30,
  },
  Userbtn: {
    width: "100%",
    bottom: 0,
    position: "absolute",
  },
  btn: {
    height: 40,
    backgroundColor: "#fc3ef2",
  },
  btnTxt: {
    textAlign: "center",
    top: 10,
    fontSize: 16,
    color: "#fff",
  },
});
