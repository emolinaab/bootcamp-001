import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default ({pokeData, setSelectedPokemon, color}) => {
  const colors = ['#ccffe6', '#ffccb3', '#ff8080', '#d9e6f2'];
  return (
    <TouchableOpacity
      style={[styles.cardContainer, {backgroundColor: colors[color]}]}
      onPress={() => setSelectedPokemon(pokeData)}>
      <Image source={{uri: pokeData.imageUrl}} style={styles.pokeImage} />
      <Text>#{pokeData.id}</Text>
      <Text>{pokeData?.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pokeImage: {
    width: 70,
    height: 70,
  },
  cardContainer: {
    width: '45%',
    textAlign: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
});
