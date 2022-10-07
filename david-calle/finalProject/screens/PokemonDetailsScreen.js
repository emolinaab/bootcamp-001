import {StyleSheet, View} from 'react-native';
import React from 'react';
import PokemonDetails from '@components/pokemonPage/PokemonDetails';
import {useSelector, useDispatch} from 'react-redux';
import {clearSelectedPokemon} from '@redux/reducers/pokemon.reducer';

const PokemonDetailsScreen = ({navigation}) => {
  const pokemonData = useSelector(state => state.pokemon.selectedPokemon);
  const dispatch = useDispatch();
  navigation.addListener('beforeRemove', e => {
    dispatch(clearSelectedPokemon());
  });
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
