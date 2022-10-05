import {
  Text,
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import PokemonCard from '@components/main/PokemonCard';
import PokemonDetails from '@components/main/PokemonDetails';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Listado Pokemón</Text>{' '}
        <View style={styles.buttonsContainer}>
          <Button onPress={() => ''} title="previous" color="#00ace6" />
          <Button onPress={() => ''} title="next" color="#00ace6" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    paddingHorizontal: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  mainTitle: {
    fontSize: 30,
    marginBottom: 20,
  },
});
