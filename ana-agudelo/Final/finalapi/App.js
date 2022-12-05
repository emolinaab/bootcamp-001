import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import PokemonList from './src/components/PokemonList';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigators/Navigator';
import 'react-native-gesture-handler';


export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
