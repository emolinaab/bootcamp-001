import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorPokemonType from "../../utils/getColorPokemonType";

export default function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorPokemonType(type);

  const bgContainerStyle = [{ backgroundColor: color, ...styles.bg }];
  return (
    <View>
      <View style={bgContainerStyle} />

      <SafeAreaView>
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
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 250,
  },
});
