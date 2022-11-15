import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import PokemonCard from './PokemonCard';
import {useSelector} from 'react-redux';
import EmptyComponent from '~components/general/EmptyComponent';
import LoadingComponent from '~components/general/LoadingComponent';

const PokemonGrid = ({pokemon}) => {
  const status = useSelector(state => state.pokemon.status);
  const CurrentEmptyComponent =
    status === 'loading' ? LoadingComponent : EmptyComponent;

  return (
    <View style={styles.pokemonGrid}>
      <FlatList
        data={pokemon}
        renderItem={({item, index}) => (
          <PokemonCard pokemonData={item} index={index} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.cardsContainer}
        keyExtractor={item => item.name}
        ListEmptyComponent={CurrentEmptyComponent}
      />
    </View>
  );
};

export default PokemonGrid;

const styles = StyleSheet.create({
  cardsContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
  },
  pokemonGrid: {
    flex: 1,
  },
});
