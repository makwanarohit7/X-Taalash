import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default CheckFun = ({ text }) => {
  if (Number.isInteger(parseInt(text))) {
    // console.log(text);
    return <Text style={styles.maintext}>{text}</Text>;
  } else {
    return <Text style={styles.maintext}>Scan Vaild Qr </Text>;
  }
};

const styles = StyleSheet.create({
  maintext: {
    fontSize: 25,
    marginTop: 30,
    textAlign: "center",
  },
});
