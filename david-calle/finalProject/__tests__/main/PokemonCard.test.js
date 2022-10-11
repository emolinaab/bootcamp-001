/**
 * @format
 */
import 'react-native';
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import pokemonData from '../pokemonData';
import PokemonCard from '~components/main/PokemonCard';
import store from '~redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonCard pokemonData={pokemonData} />
      </NavigationContainer>
    </Provider>,
  );
  expect(screen.getByText('bulbasaur')).toBeTruthy();
});

it('updates state on press', () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonCard pokemonData={pokemonData} />
      </NavigationContainer>
    </Provider>,
  );
  fireEvent.press(screen.getByText('bulbasaur'));
  expect(mockedNavigate).toHaveBeenCalledTimes(1);
  expect(store.getState().pokemon.selectedPokemon).toEqual(pokemonData);
});
