import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  increment,
  decrement,
} from '../features/counter/counterSlice';
import { Colors } from '../colors';
import Button from './Button';
import CardDetails from './CardDetails';
import { getPokemon } from '../features/getPokemon';

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const currentPokemon = useAppSelector(state => state.pokemon);
  const counter = useAppSelector(state => state.counter.value);

  useEffect(() => {

    getPokemon(counter, dispatch);
  }, [counter, dispatch]);


  const handleNextButton = () => {
    dispatch(increment());
  };
  const handlePrevButton = () => {
    dispatch(decrement());
  };
  return (
    <View style={[styles.container, { backgroundColor: currentPokemon.color }]}>
      <StatusBar barStyle={'light-content'} />
      <Image
        style={styles.pokeball}
        source={require('../images/Pokeball.png')}
      />
      <View style={styles.whiteSheet} />
      <SafeAreaView>
        {/* name and number */}
        <View style={styles.row}>
          <Text style={styles.pokemonName}>
            {currentPokemon.name.charAt(0).toUpperCase() +
              currentPokemon.name.slice(1)}
          </Text>
          <Text
            style={[
              styles.pokemonName,
              { textAlign: 'right', marginRight: 20, fontSize: 25 },
            ]}>
            #{currentPokemon.id}
          </Text>
        </View>
        {/* Image and buttons */}
        <View style={[styles.row, { height: 250 }]}>
          <View>
            <Button onPress={handlePrevButton}>◀</Button>
          </View>
          <Image
            style={styles.pokemonImage}
            source={{ uri: currentPokemon?.image }}
          />
          <View>
            <Button onPress={handleNextButton}>▶</Button>
          </View>
        </View>
        {/* Pokemon type */}
        <CardDetails currentPokemon={currentPokemon} />
      </SafeAreaView>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.fire,
  },
  pokeball: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  pokemonName: {
    fontSize: 35,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pokemonTypeContainer: {
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteSheet: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    borderRadius: 20,
    backgroundColor: Colors.white,
    width: '95%',
    height: '60%',
  },
});
