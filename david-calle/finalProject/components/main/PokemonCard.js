import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {getColorByType} from '@utils';

export default ({pokeData, index}) => {
  const capitalize = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[
          styles.cardContainer,
          styles.typeBackground(pokeData.types[0]),
          styles.directionByIndex(index),
        ]}
        onPress={() => null}>
        <Image source={{uri: pokeData.imageUrl}} style={styles.pokeImage} />
        <Text style={styles.pokeName}>{capitalize(pokeData?.name)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pokeImage: {
    width: 90,
    height: 90,
  },
  pokeName: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    borderColor: '#fff',
    borderWidth: 1,
  },
  cardContainer: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    padding: 5,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  directionByIndex: index => ({
    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
  }),
  typeBackground: type => ({
    borderWidth: 3,
    borderColor: getColorByType(type),
  }),
});
