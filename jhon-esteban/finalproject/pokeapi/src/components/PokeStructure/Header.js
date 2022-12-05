import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorPokemonType from "../../utils/getColorPokeType";

export default function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorPokemonType(type);

  const bgContainerStyle = [{ backgroundColor: color, ...styles.bg }];
  return (
    <View>
      <View style={bgContainerStyle} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.containerImg}>
          <Image source={{ url: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  container: { marginHorizontal: 20, marginTop: 30 },
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: { color: "#fff", fontWeight: "bold", fontSize: 27 },
  order: { color: "#fff", fontWeight: "bold" },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});