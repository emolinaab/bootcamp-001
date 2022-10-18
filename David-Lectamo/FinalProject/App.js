import React from 'react';
import PokemonList from './src/components/PokemonList';
import {
  SafeAreaView,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/store/store';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon',
    }
  }
  
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <View>
            <PokemonList/>
          </View>
        </SafeAreaView>
      </Provider>
    );
  };
}