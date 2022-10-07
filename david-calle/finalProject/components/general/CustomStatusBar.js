import {StyleSheet, StatusBar, useColorScheme} from 'react-native';
import React from 'react';
import {COLORS} from '@constants';
import {useSelector} from 'react-redux';
import {getColorByType} from '@utils';

const CustomStatusBar = () => {
  const selectedPokemon = useSelector(state => state.pokemon.selectedPokemon);
  const isDarkMode = useColorScheme() === 'dark';
  const pokemonBackgroundColor = getColorByType(selectedPokemon.types[0]);

  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={pokemonBackgroundColor || '#d91d09'}
    />
  );
};

export default CustomStatusBar;
