import {StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';

const PokemonImage = ({pokemonData}) => {
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require('@assets/images/pokemon_background.jpg')}>
      <Image source={{uri: pokemonData.imageUrl}} style={styles.pokeImage} />
    </ImageBackground>
  );
};

export default PokemonImage;

const styles = StyleSheet.create({
  pokeImage: {
    width: 250,
    height: 250,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});
