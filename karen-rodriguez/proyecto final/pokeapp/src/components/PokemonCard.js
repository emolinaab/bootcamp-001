import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import getColorPokemonType from "../utils/getColorPokemonType";
import { useNavigation } from "@react-navigation/native";
import { capitalize } from "lodash";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();

  const pokemonColor = getColorPokemonType(pokemon.type);

  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  return (
    <TouchableNativeFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(2, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },

  number: {
    position: "absolute",
    right: 15,
    top: 15,
    color: "#fff",
    fontSize: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
    padding: 8,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
