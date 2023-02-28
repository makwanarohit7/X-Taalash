import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>DataBase</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maintext: {
    fontSize: 25,
    marginTop: 30,
    textAlign: "center",
  },
});
