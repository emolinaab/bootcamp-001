/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Characters from './components/Characters';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import Pagination from './components/Pagination';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = initialUrl => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <SafeAreaView style={styles.containerPrimary}>
      <View style={styles.nav}>
        <Text style={styles.text}>RICK AND MORTY</Text>
      </View>
      <Characters style={styles.cardItem} characters={characters} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerPrimary: {
    alignItems: 'center',
    backgroundColor: '#252525',
    flex: 1,
    width: '100%',
  },

  nav: {
    alignItems: 'center',
    width: '100%',
  },

  text: {
    color: '#f0f0f0',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: 'red',
  },
});

export default App;
