/**
 * @format
 */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import pokemonData from './pokemonData';
import PokemonCard from '~components/main/PokemonCard';
import store from '~redux/store';
import {Provider} from 'react-redux';
import navigation from '../../navigation';
import {NavigationContainer} from '@react-navigation/native';

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonCard pokemonData={pokemonData} />
      </NavigationContainer>
    </Provider>,
  );
});
