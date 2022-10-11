/**
 * @format
 */
import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {multiplePokemonData} from '../pokemonData';
import PokemonGrid from '~components/main/PokemonGrid';
import store from '~redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonGrid pokemon={multiplePokemonData} />
      </NavigationContainer>
    </Provider>,
  );
});
