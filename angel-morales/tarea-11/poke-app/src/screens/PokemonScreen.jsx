import { View, Text } from "react-native";
import React from "react";
import ShowPokemon from "../components/ShowPokemon";

const PokemonScreen = ({ route }) => {
  const { id } = route.params.data;

  return (
    <View>
      <ShowPokemon id={id} />
    </View>
  );
};

export default PokemonScreen;
