import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>About Us</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
