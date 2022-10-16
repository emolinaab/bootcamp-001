import React from 'react';
import { Text, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonTypeColors } from '../../theme/colors';

const LocationsPage = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={PokemonTypeColors.pokemonRed} />
      <Text>Locations here</Text>
    </ScrollView>
  );
};

export default LocationsPage;
