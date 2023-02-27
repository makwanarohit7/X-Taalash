import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>X-TAALASH</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#de8b07",
  },
  headerText: {
    padding: 30,
    marginTop: 20,
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
