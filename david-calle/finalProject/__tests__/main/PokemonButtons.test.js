/**
 * @format
 */
import 'react-native';
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import store from '~redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import PokemonButtons from '~components/main/PokemonButtons';
import * as reactRedux from 'react-redux';
import * as pokemonActions from '~redux/reducers/pokemon.reducer';

const mockedDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch,
}));

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonButtons />
      </NavigationContainer>
    </Provider>,
  );
});

it('uses the dispatcher for the 3 buttons', async () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
  const dispatch = jest.fn();
  useDispatchMock.mockReturnValue(dispatch);

  const getNextPokemonsMock = jest.spyOn(pokemonActions, 'getNextPokemons');
  const getNextPokemonsAction = jest.fn();
  getNextPokemonsMock.mockReturnValue(getNextPokemonsAction);

  const getPrevPokemonsMock = jest.spyOn(pokemonActions, 'getPrevPokemons');
  const getPrevPokemonsAction = jest.fn();
  getPrevPokemonsMock.mockReturnValue(getPrevPokemonsAction);

  const getInitialPokemonsMock = jest.spyOn(
    pokemonActions,
    'getInitialPokemons',
  );
  const getInitialPokemonsAction = jest.fn();
  getInitialPokemonsMock.mockReturnValue(getInitialPokemonsAction);

  render(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonButtons />
      </NavigationContainer>
    </Provider>,
  );
  fireEvent.press(screen.getByTestId('nextButton'));
  expect(dispatch).toHaveBeenCalledWith(pokemonActions.getNextPokemons());
  fireEvent.press(screen.getByTestId('prevButton'));
  expect(dispatch).toHaveBeenCalledWith(pokemonActions.getPrevPokemons());
  fireEvent.press(screen.getByTestId('resetButton'));
  expect(dispatch).toHaveBeenCalledWith(pokemonActions.getInitialPokemons());
});
