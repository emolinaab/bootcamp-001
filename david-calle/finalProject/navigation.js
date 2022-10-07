import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '@screens/MainScreen';
import PokemonDetailsScreen from '@screens/PokemonDetailsScreen';
import {capitalize} from '@utils';

const Stack = createNativeStackNavigator();
const config = {
  headerShown: false,
};

const DetailsConfig = ({route}) => {
  const {name} = route.params.pokemonData;
  return {
    title: capitalize(name),
    headerStyle: {
      backgroundColor: '#d91d09',
    },
  };
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} options={config} />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetailsScreen}
          options={DetailsConfig}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
