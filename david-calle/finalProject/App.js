/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
} from 'react-native';
import {Provider} from 'react-redux';
import store from '@redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView styles={styles.sectionContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <Text>#TODO</Text>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
