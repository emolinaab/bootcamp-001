import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PokemonDetails from '@components/pokemonPage/PokemonDetails';

const PokemonDetailsScreen = ({route}) => {
  const {pokemonData} = route.params;
  return (
    <View>
      <PokemonDetails pokemonData={pokemonData} />
    </View>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({});
