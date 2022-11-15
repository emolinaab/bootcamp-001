import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import PokemonImage from './PokemonImage';

const PokemonDetails = ({pokemonData}) => {
  const types = pokemonData?.types?.join(', ');
  const moves = pokemonData?.moves?.join(', ');

  return (
    <View style={styles.detailsContainer}>
      <PokemonImage pokemonData={pokemonData} />
      <View style={styles.informationContainer}>
        <Text style={styles.title}>Number</Text>
        <Text style={styles.description}>#{pokemonData?.id}</Text>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.description}>{pokemonData?.name}</Text>
        <Text style={styles.title}>Types</Text>
        <Text style={styles.description}>{types}</Text>
        <Text style={styles.title}>Weight</Text>
        <Text style={styles.description}>{pokemonData?.weight} kg</Text>
        <Text style={styles.title}>Sprites</Text>
        <FlatList
          data={pokemonData?.sprites}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={styles.pokeSprite} />
          )}
          horizontal={true}
          style={styles.spritesContainer}
        />
        <Text style={styles.title}>Moves</Text>
        <Text style={styles.description}>{moves}</Text>
      </View>
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  pokeSprite: {
    width: 90,
    height: 90,
    margin: 1,
  },
  spritesContainer: {
    width: '100%',
    margin: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    fontSize: 17,
  },
  informationContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
