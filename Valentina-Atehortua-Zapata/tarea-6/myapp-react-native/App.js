import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 30, color: "white", fontFamily: "OpenSans-Bold" }}
      >
        Hola Mundo! React Native
      </Text>
      <Image
        style={styles.imgStyle}
        source={require("./assets/splash.png")}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87cefa",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: 800,
    height: 200,
    marginTop: 30,
  },
});
