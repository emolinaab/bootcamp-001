import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '@screens/MainScreen';
import PokemonDetailsScreen from '@screens/PokemonDetailsScreen';
import {capitalize} from '@utils';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const config = {
  headerShown: false,
};

const DetailsConfig = name => ({
  title: capitalize(name),
  headerStyle: {
    backgroundColor: '#d91d09',
  },
});

function App() {
  const name = useSelector(state => state.pokemon.selectedPokemon.name);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} options={config} />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetailsScreen}
          options={DetailsConfig(name)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
