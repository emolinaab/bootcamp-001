import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

export default ({pokeData, setSelectedPokemon}) => {
  const types = pokeData.types?.reduce((prev, cur) => prev + ' ' + cur, '');
  const moves = pokeData.moves?.reduce((prev, cur) => prev + ' ' + cur, '');
  const sprites = pokeData.sprites?.map((spriteUrl, index) => (
    <Image source={{uri: spriteUrl}} style={styles.pokeSprite} key={index} />
  ));

  return (
    <View style={styles.detailsContainer}>
      <TouchableOpacity
        style={styles.closeDetails}
        onPress={() => setSelectedPokemon(null)}>
        <Text>x</Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <Image source={{uri: pokeData.imageUrl}} style={styles.pokeImage} />
        <Text>#{pokeData.id}</Text>
        <Text>{pokeData?.name}</Text>
      </View>
      <Text style={styles.title}>Types</Text>
      <Text>{types}</Text>
      <Text style={styles.title}>Peso</Text>
      <Text>{pokeData.weight}</Text>
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
  closeDetails: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#b366ff',
    paddingHorizontal: 5,
    zIndex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: '#cc99ff',
    padding: 10,
  },
});
