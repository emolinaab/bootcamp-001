/**
 * @format
 */
import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import pokemonData from '../pokemonData';
import store from '~redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import PokemonImage from '~components/pokemonPage/PokemonImage';

it('renders correctly', () => {
  render(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonImage pokemonData={pokemonData} />
      </NavigationContainer>
    </Provider>,
  );
});
