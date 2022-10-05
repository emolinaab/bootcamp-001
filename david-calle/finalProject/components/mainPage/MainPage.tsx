import {
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [search, setSearch] = useState('');
  const [searchPokemon, setSearchPokemon] = useState(null);

  const pokeCards = pokemon.map((item, index) => (
    <PokemonCard
      pokeData={item}
      setSelectedPokemon={setSelectedPokemon}
      key={index}
      color={index % 4}
    />
  ));

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Listado Pokemón</Text>

        <TextInput
          style={styles.searchBar}
          placeholder="Buscar Pokemon"
          value={search}
          onChangeText={text => setSearch(text)}
        />

        <View style={styles.pokemonGrid}>
          <View
            style={[
              styles.cardsWrapper,
              selectedPokemon ? styles.cardsContainerSmall : null,
            ]}>
            <View style={styles.cardsContainer}>{pokeCards}</View>
          </View>
          {selectedPokemon ? (
            <View style={styles.detailsContainer}>
              <PokemonDetails
                pokeData={selectedPokemon}
                setSelectedPokemon={setSelectedPokemon}
              />
            </View>
          ) : null}
        </View>
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
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginHorizontal: 'auto',
    width: '100%',
  },
  cardsContainerSmall: {
    width: '60%',
  },
  searchBar: {
    width: '60%',
    alignSelf: 'baseline',
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 5,
  },
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  pokemonGrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  detailsContainer: {
    width: '35%',
  },
  mainTitle: {
    fontSize: 30,
    marginBottom: 20,
  },
});
