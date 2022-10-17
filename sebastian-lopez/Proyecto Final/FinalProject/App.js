/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import Home from './components/moviesHome';
import MovieInfo from './components/movieDetails';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TvShows from './components/tvshows'
import TvShowInfo from './components/tvShowDetails';
import SeasonEpisodes from './components/episodes'

const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name='TvShows' component={TvShows}/>
          <Stack.Screen name="MovieDetails" component={MovieInfo}/>
          <Stack.Screen name='TvShowDetails' component={TvShowInfo}/>
          <Stack.Screen name='Episodes' component={SeasonEpisodes}/>
        </Stack.Navigator>
    </NavigationContainer>
      
  );
};


export default App;
