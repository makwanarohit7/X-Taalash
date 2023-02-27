import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import About from "./Components/About";
import Header from "./Components/Header";
import Qr_Screen from "./Components/Qr_Screen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Qr_Screen />
      {/* <About /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
