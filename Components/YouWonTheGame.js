import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import TimePicker from "./TimePicker";
const YouWonTheGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You Finish The Game</Text>
      <Image
        source={require("../Components/images/cup1.png")}
        style={styles.images}
      />
      <TimePicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 40,
  },
  images: { width: 250, height: 350, marginTop: 40 },
});

export default YouWonTheGame;
