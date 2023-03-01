import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import TimePicker from "./TimePicker";
const YouWonTheGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You Finish The Game</Text>
      <View style={styles.image_container}>
        <Image
          source={require("../Components/images/Cong.png")}
          style={styles.images}
          resizeMode="contain"
        />
      </View>

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
  images: { width: 400, height: 100, marginTop: 40 },
  image_container: {},
});

export default YouWonTheGame;
