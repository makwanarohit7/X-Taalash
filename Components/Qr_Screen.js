import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ToastAndroid } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
// import CheckFun from "./CheckFun";
export default function Qr_Screen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [text, setText] = useState(null);
  const [scannedValues, setScannedValues] = useState([]);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect((type, data) => {
    askForCameraPermission();
  }, []);

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }
  /////////////////////////
  const permutations = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [2, 13, 14, 15, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1],
    [3, 14, 15, 1, 2, 13, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [4, 15, 1, 2, 13, 14, 3, 12, 5, 6, 7, 8, 9, 10, 11],
    [5, 3, 2, 13, 14, 15, 11, 7, 10, 4, 12, 1, 6, 8, 9],
    [6, 4, 13, 14, 15, 11, 12, 10, 8, 3, 1, 2, 5, 9, 7],
    [7, 5, 4, 3, 11, 12, 13, 14, 15, 9, 10, 6, 8, 1, 2],
    [8, 6, 5, 12, 7, 10, 14, 9, 11, 1, 2, 3, 4, 15, 13],
    [9, 7, 6, 5, 10, 8, 15, 11, 1, 2, 3, 4, 12, 13, 14],
    [10, 8, 7, 6, 4, 3, 9, 1, 2, 13, 14, 11, 15, 12, 5],
    [11, 9, 8, 7, 12, 5, 10, 2, 3, 14, 13, 15, 4, 6, 1],
    [12, 10, 9, 8, 1, 2, 6, 3, 4, 11, 15, 13, 14, 7, 5],
    [13, 11, 10, 9, 6, 5, 8, 4, 12, 15, 7, 14, 1, 2, 3],
    [14, 12, 11, 10, 8, 9, 1, 15, 13, 7, 5, 3, 2, 4, 6],
    [15, 1, 12, 11, 9, 7, 2, 13, 14, 5, 6, 4, 3, 8, 10],
  ];

  const validate = (scannedValues) => {
    if (scannedValues.length < 1) {
      return true;
    }
    console.log(scannedValues);
    const clueList = permutations.find((item) => item[0] === scannedValues[0]);
    const progressCount = scannedValues.length;
    console.log(clueList);
    console.log(progressCount);
    if (scannedValues[progressCount - 1] === clueList[progressCount - 1]) {
      // success
      return true;
    } else {
      // failed
      return false;
    }
  };
  /////////////////////////////////////
  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const newScannedValues = [...scannedValues, +data];
    if (validate(newScannedValues)) {
      setScannedValues(newScannedValues);
      ToastAndroid.showWithGravityAndOffset(
        "You Scanned Right QR Code",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      // console.log("Right");
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "Soory,You Scanned Wrong QR Code",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      // console.log("Not Valid");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>Scan The QR Code</Text>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 530, width: 400 }}
        />
      </View>

      <View style={styles.button}>
        {scanned && (
          <Button
            title={"Scan again ?"}
            onPress={() => setScanned(false)}
            color="#de8b07"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#495E57",
  },
  maintext: {
    fontSize: 25,
    marginTop: 30,
    textAlign: "center",
  },
  barcodebox: {
    marginTop: 20,
    marginLeft: 55,
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 50,
  },
  button: {
    marginTop: 20,
  },
});
