import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import TimePicker from "./TimePicker";
const YouWonTheGame = ({ navigation }) => {
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      {/* <View style={styles.container}> */}
      <Text style={styles.text}>You Finish The Game</Text>
      <View style={styles.image_container}>
        <Image
          source={require("../Components/images/Cong.png")}
          style={styles.images}
          resizeMode="contain"
        />
      </View>

      <TimePicker />
      {/* </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#495E57",
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
