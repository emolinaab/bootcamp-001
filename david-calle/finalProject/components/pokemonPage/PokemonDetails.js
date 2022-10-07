import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

export default ({pokemonData}) => {
  const types = pokemonData.types?.reduce((prev, cur) => prev + ' ' + cur, '');
  const moves = pokemonData.moves?.reduce((prev, cur) => prev + ' ' + cur, '');
  const sprites = pokemonData.sprites?.map((spriteUrl, index) => (
    <Image source={{uri: spriteUrl}} style={styles.pokeSprite} key={index} />
  ));

  return (
    <View style={styles.detailsContainer}>
      <View style={styles.cardContainer}>
        <Image source={{uri: pokemonData.imageUrl}} style={styles.pokeImage} />
        <Text>#{pokemonData.id}</Text>
        <Text>{pokemonData?.name}</Text>
      </View>
      <Text style={styles.title}>Types</Text>
      <Text>{types}</Text>
      <Text style={styles.title}>Peso</Text>
      <Text>{pokemonData.weight}</Text>
      <Text style={styles.title}>Sprites</Text>
      <ScrollView horizontal={true} style={styles.spritesContainer}>
        {sprites}
      </ScrollView>
      <Text style={styles.title}>Movimientos</Text>
      <Text>{moves}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pokeImage: {
    width: 90,
    height: 90,
  },
  pokeSprite: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 200,
    margin: 1,
  },
  cardContainer: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: '#cc99ff',
    padding: 10,
  },
});
