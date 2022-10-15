import React from "react";
import { View, StyleSheet, Text, Image, StatusBar } from "react-native";
import { getPokemon } from "../../api/pokeapi";
import { useDispatch, useSelector } from "react-redux";
import { setPokemon } from "../features/pokemon/pokemonSlice";
import { searchColor } from "./theme";

const ShowPokemon = ({ id }) => {
  const currentPokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  const loading = async (pokemon) => {
    const res = await getPokemon(pokemon);
    dispatch(setPokemon(res));
  };

  loading(id);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: searchColor(currentPokemon.type) },
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.id}>#{currentPokemon.id}</Text>

        <View style={styles.contenImg}>
          <Image style={styles.img} source={{ uri: currentPokemon.img }} />
        </View>
        <View>
          <Text style={styles.title}>{currentPokemon.name}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardAbout}>
          <Text
            style={[
              styles.subtitle,
              { marginBottom: 10, color: searchColor(currentPokemon.type) },
            ]}
          >
            About
          </Text>
          <View
            style={[
              styles.contentType,
              { backgroundColor: searchColor(currentPokemon.type) },
            ]}
          >
            <Text style={styles.typeText}>{currentPokemon.type}</Text>
          </View>
          <View style={[styles.row, { marginTop: 10 }]}>
            <View style={{ width: "50%" }}>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                HP
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                Attack
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                Defense
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                Special Attack
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                Special Defense
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                Speed
              </Text>
            </View>
            <View>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                {currentPokemon.stats?.hp}
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                {currentPokemon.stats?.attack}
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                {currentPokemon.stats?.defense}
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                {currentPokemon.stats?.specialAttack}{" "}
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                {currentPokemon.stats?.specialDefense}{" "}
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: searchColor(currentPokemon.type) },
                ]}
              >
                {currentPokemon.stats?.speed}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },

  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "52%",
    padding: 10,
  },
  contenImg: {
    width: "50%",
    height: "50%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: StatusBar.currentHeight,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    alignContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  id: {
    fontSize: 22,
    color: "#FFFFFF",
    textTransform: "capitalize",
    fontWeight: "bold",
    textAlign: "right",
    width: "100%",
  },
  contentType: {
    height: 28,
    width: 80,
    borderRadius: 12,
  },
  cardAbout: {
    display: "flex",
    alignItems: "center",
  },
  typeText: {
    textAlign: "center",
    color: "#ffffff",
    textTransform: "capitalize",
    fontSize: 16,
  },
  subtitle: {
    fontSize: 22,
    color: "#FFFFFF",
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ShowPokemon;
