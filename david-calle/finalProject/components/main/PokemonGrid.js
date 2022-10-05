import {View, StyleSheet} from 'react-native';
import React from 'react';
import PokemonCard from './PokemonCard';
import {useSelector} from 'react-redux';

const PokemonGrid = () => {
  const pokemon = useSelector(state => state.pokemon.pokemon);

  const pokeCards = pokemon.map((item, index) => (
    <PokemonCard pokeData={item} key={index} color={index % 4} />
  ));

  return (
    <View style={styles.pokemonGrid}>
      <View style={styles.cardsWrapper}>
        <View style={styles.cardsContainer}>{pokeCards}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginHorizontal: 'auto',
    width: '100%',
  },
  cardsContainerSmall: {
    width: '60%',
  },
  pokemonGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
});

export default PokemonGrid;
