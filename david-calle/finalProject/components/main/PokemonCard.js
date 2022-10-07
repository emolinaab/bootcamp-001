import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {getColorByType, capitalize} from '@utils';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setSelectedPokemon} from '@redux/reducers/pokemon.reducer';

const PokemonCard = ({pokemonData, index}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePokemonPress = () => {
    dispatch(setSelectedPokemon(pokemonData));
    navigation.navigate('PokemonDetails', {pokemonData});
  };

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        styles.typeBorder(pokemonData.types[0]),
        styles.stylesByIndex(index),
      ]}
      onPress={handlePokemonPress}>
      <Image source={{uri: pokemonData.imageUrl}} style={styles.pokeImage} />
      <Text style={styles.pokeName}>{capitalize(pokemonData?.name)}</Text>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  pokeImage: {
    width: 100,
    height: 100,
  },
  pokeName: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    padding: 5,
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 1,
  },
  stylesByIndex: index => ({
    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
    borderLeftWidth: index % 2 === 0 ? 5 : 0,
    borderRightWidth: index % 2 === 0 ? 0 : 5,
  }),
  typeBorder: type => ({
    borderColor: getColorByType(type),
  }),
});
