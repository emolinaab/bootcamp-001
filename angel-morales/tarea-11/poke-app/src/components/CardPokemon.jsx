import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { searchColor } from "./theme";

export const CardPokemon = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: searchColor(data.type) }]}
      onPress={() => navigation.navigate("PokemonScreen", { data })}
    >
      <View style={styles.row}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.contentType}>
          <Text style={styles.typeText}>{data.type}</Text>
        </View>
      </View>
      <View style={styles.contentImg}>
        <Image
          source={{
            uri: data.img,
          }}
          style={styles.img}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "98%",
    height: 100,
    margin: 4,
    borderWidth: 0,
    borderRadius: 9,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  title: {
    fontSize: 20,
    color: "#FFFFFF",
    textTransform: "capitalize",
    textAlign: "left",
    fontWeight: "bold",
  },
  contentType: {
    height: 30,
    width: 80,
    marginTop: 5,
    backgroundColor: "#ddd7d747",
    borderRadius: 9,
  },
  typeText: {
    fontSize: 14,
    padding: "5%",
    color: "#FFFFFF",
    textAlign: "center",
  },
  contentImg: {
    height: "100%",
    width: "30%",
  },
  img: {
    height: "100%",
    width: "100%",
  },
});
