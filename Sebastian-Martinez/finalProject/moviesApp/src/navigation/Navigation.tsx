import { createStackNavigator } from "@react-navigation/stack";
import { Movie } from "../interfaces/movieInterface";
import DetailScreen from "../views/DetailScreen";
import {HomeScreen} from "../views/HomeScreen";


export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
