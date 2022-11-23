import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Characters = ({characters = []}) => {
  return (
    <ScrollView style={styles.container}>
      {characters.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={{uri: item.image}} style={styles.img}></Image>
          <Text style={styles.name}>{item.name}</Text>
          <Text>Especie: {item.species}</Text>
          <Text>Localización: {item.location.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    height: 335,
    alignItems: 'center',
    backgroundColor: '#19191a',
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#19191a',
  },
  img: {
    width: '80%',
    height: 220,
    marginTop: 20,
  },
  name: {
    fontSize: 18,
  },
});

export default Characters;
