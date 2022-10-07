import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {getPokemonByName} from '@redux/reducers/pokemon.reducer';
import {useNavigation} from '@react-navigation/native';

const PokemonSearch = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleSearch = () => {
    dispatch(getPokemonByName(search))
      .unwrap()
      .then(data => {
        Keyboard.dismiss();
        if (!data) {
          return;
        }
        setSearch('');
        navigation.navigate('PokemonDetails');
      });
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar Pokemon"
        value={search}
        onChangeText={text => setSearch(text)}
        onEndEditing={handleSearch}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Icon name="search" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default PokemonSearch;

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: '#fff',
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  searchButton: {
    backgroundColor: 'fff',
    marginLeft: 7,
  },
});
