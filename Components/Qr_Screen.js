import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function Qr_Screen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState(null);

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
  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    // console.log("Type: " + type + "\nData: " + data);
  };

  const CheckFun = () => {
    if (Number.isInteger(parseInt(text))) {
      return <Text style={styles.maintext}>{text}</Text>;
    } else {
      return <Text style={styles.maintext}>Scan Vaild Qr </Text>;
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

      <CheckFun />
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
