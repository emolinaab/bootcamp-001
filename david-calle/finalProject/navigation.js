import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '~screens/MainScreen';
import PokemonDetailsScreen from '~screens/PokemonDetailsScreen';
import {capitalize, getColorByType} from '~utils';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const config = {
  headerShown: false,
};

const DetailsConfig = (name, type) => ({
  title: capitalize(name),
  headerStyle: {
    backgroundColor: getColorByType(type) || '#d91d09',
  },
});

function App() {
  const name = useSelector(state => state.pokemon.selectedPokemon?.name);
  const type = useSelector(state => state.pokemon.selectedPokemon?.types[0]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} options={config} />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetailsScreen}
          options={DetailsConfig(name, type)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
