import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NoLogin() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>To see this screen you have to login</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate("Account")}
      />
      <Image source={require("../assets/spinda.png")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 20,
  },
  image: {
    width: 420,
    height: 500,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: 25,
    marginRight: 20,
    marginLeft: -28,
  },
});
