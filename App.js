import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "./Components/Header";
import YouWonTheGame from "./Components/YouWonTheGame";
import Qr_Screen from "./Components/Qr_Screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* <ScrollView indicatorStyle="white" style={{ flex: 1 }}> */}
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome To Xenesis-2023">
            <Stack.Screen
              name="Welcome To Xenesis-2023"
              component={Qr_Screen}
            />
            <Stack.Screen name="Finish" component={YouWonTheGame} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
      {/* <Qr_Screen /> */}
      {/* <YouWonTheGame /> */}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
});
