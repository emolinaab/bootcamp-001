/**
 * @format
 */
import 'react-native';
import React from 'react';
import store from '~redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import PokemonSearch from '~components/main/PokemonSearch';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';

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
        <PokemonSearch />
      </NavigationContainer>
    </Provider>,
  );
});

test('search is working correctly', async () => {
  jest.mock('~redux/reducers/pokemon.reducer', () => {
    const actualReducer = jest.requireActual('~redux/reducers/pokemon.reducer');
    return {
      ...actualReducer,
      getPokemonByName: name => {
        console.log('name', name);
        return Promise.resolve({data: 'some data'});
      },
    };
  });

  render(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonSearch />
      </NavigationContainer>
    </Provider>,
  );
  const input = screen.getByPlaceholderText('Search Pokemon');

  fireEvent.changeText(input, 'bulbasaur');

  expect(input.props.value).toBe('bulbasaur');
  const button = screen.getByTestId('searchButton');
  fireEvent.press(button);
  await waitFor(() => {
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
