import {Text, View, SafeAreaView, StyleSheet, Platform} from 'react-native';
import React from 'react';
import PokemonSearch from '@components/main/PokemonSearch';
import PokemonGrid from '@components/main/PokemonGrid';

const MainScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Listado Pokemón</Text>
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
