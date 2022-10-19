import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
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
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});
