import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import PokemonSearch from '@components/main/PokemonSearch';
import PokemonGrid from '@components/main/PokemonGrid';
import {useSelector, useDispatch} from 'react-redux';

import {
  getNextPokemons,
  getPrevPokemons,
} from '@redux/reducers/pokemon.reducer';

const MainScreen = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state =>
    state.pokemon.pokemons.map(pokemon => pokemon.name),
  );
  useEffect(() => {
    console.log('pokemons', pokemons);
  }, [pokemons]);
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Listado Pokemón</Text>
        <Button
          title="Get Pokemons"
          onPress={() => dispatch(getNextPokemons())}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {},
  buttonsContainer: {},
  mainTitle: {},
});

export default MainScreen;
