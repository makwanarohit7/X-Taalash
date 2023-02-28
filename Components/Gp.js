// import React from "react";
// import { View, Button } from "react-native";
// import Sound from "react-native-sound";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.sound = new Sound(
//       "../Components/images/Payment.mp3",
//       Sound.MAIN_BUNDLE,
//       (error) => {
//         if (error) {
//           console.log("Failed to load the sound", error);
//           return;
//         }
//         // loaded successfully
//         console.log("Sound loaded");
//       }
//     );
//   }

//   playSound() {
//     this.sound.play((success) => {
//       if (success) {
//         console.log("Sound played successfully");
//       } else {
//         console.log("Failed to play the sound");
//       }
//     });
//   }

//   render() {
//     return (
//       <View>
//         <Button title="Play sound" onPress={() => this.playSound()} />
//       </View>
//     );
//   }
// }
