/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import {Provider} from 'react-redux';
import store from '@redux/store';
import Navigation from 'navigation';
import {getInitialPokemons} from '@redux/reducers/pokemon.reducer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    store.dispatch(getInitialPokemons());
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Provider store={store}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
