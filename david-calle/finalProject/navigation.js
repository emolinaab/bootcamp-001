import React from 'react';
import MainScreen from '@screens/MainScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const config = {
  headerShown: false,
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={config}>
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
