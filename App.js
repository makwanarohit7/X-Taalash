import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import About from "./Components/About";
import Header from "./Components/Header";
import TimePicker from "./Components/TimePicker";

import YouWonTheGame from "./Components/YouWonTheGame";
import Gp from "./Components/Gp";
import Qr_Screen from "./Components/Qr_Screen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView indicatorStyle="white" style={{ flex: 1 }}>
        {/* <Qr_Screen /> */}
        {/* <YouWonTheGame /> */}
        {/* <About /> */}
        {/* <Gp /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
