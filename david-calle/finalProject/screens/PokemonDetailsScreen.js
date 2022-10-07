import {StyleSheet, View} from 'react-native';
import React from 'react';
import PokemonDetails from '@components/pokemonPage/PokemonDetails';
import {useSelector} from 'react-redux';
const PokemonDetailsScreen = () => {
  const pokemonData = useSelector(state => state.pokemon.selectedPokemon);

  return (
    <View style={styles.PokemonDetails}>
      <PokemonDetails pokemonData={pokemonData} />
    </View>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({
  PokemonDetails: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
