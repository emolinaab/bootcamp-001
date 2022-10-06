import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import PokemonSearch from '@components/main/PokemonSearch';
import PokemonGrid from '@components/main/PokemonGrid';
import PokemonButtons from '@components/main/PokemonButtons';
import {useSelector} from 'react-redux';

const MainScreen = () => {
  const pokemon = useSelector(state => state.pokemon.pokemons);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Pokedex 2</Text>
        <PokemonSearch />
      </View>
      <PokemonGrid pokemon={pokemon} />
      <PokemonButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#fff',
  },
  header: {
    backgroundColor: '#d91d09',
    padding: 10,
  },
});

export default MainScreen;
