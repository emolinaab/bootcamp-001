import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const PokemonSearch = () => {
  const [search, setSearch] = useState('');

  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar Pokemon"
        value={search}
        onChangeText={text => setSearch(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default PokemonSearch;
