/**
 * @format
 */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import store from '~redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import PokemonButtons from '~components/main/PokemonButtons';

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <NavigationContainer>
        <PokemonButtons />
      </NavigationContainer>
    </Provider>,
  );
});
