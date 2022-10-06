import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonGrid = ({pokemon}) => {
  return (
    <View style={styles.pokemonGrid}>
      <View>
        <FlatList
          data={pokemon}
          renderItem={({item, index}) => (
            <PokemonCard pokeData={item} index={index} />
          )}
          numColumns={2}
          columnWrapperStyle={styles.cardsContainer}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  pokemonGrid: {},
});

export default PokemonGrid;
