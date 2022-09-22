import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./assets/smile.png")} />
      <Text>Hi! Now I'm in React Native. This is another test ★</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cab6fc",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    height:200,
    width:200,
    marginBottom:50
  },
});
