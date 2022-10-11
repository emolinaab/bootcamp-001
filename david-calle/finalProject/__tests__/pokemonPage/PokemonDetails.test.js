/**
 * @format
 */
import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import pokemonData from '../pokemonData';
import store from '~redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import PokemonDetails from '~components/pokemonPage/PokemonDetails';
it('renders correctly', () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonDetails pokemonData={pokemonData} />
      </NavigationContainer>
    </Provider>,
  );
  expect(screen.getByText('bulbasaur')).toBeTruthy();
  expect(screen.getByText('Name')).toBeTruthy();
});
