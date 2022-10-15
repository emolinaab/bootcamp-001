import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/app/store";
import HomeScreen from "./src/screens/HomeScreen";
import PokemonScreen from "./src/screens/PokemonScreen";
import { Image, StyleSheet } from "react-native";
import poke from "./assets/poke.png";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              navigationBarHidden: HomeScreen,
              headerLeft: () => <Image source={poke} style={style.logo} />,
              title: "PokeDex",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#ffffff",
              },
              headerStyle: {
                backgroundColor: "#234e62",
              },
            }}
          />
          {
            <Stack.Screen
              name="PokemonScreen"
              component={PokemonScreen}
              options={{
                title: "Pokemon Information",
                headerTitleStyle: {
                  color: "#ffffff",
                },
                headerStyle: {
                  backgroundColor: "#234e62",
                },
              }}
            />
          }
        </Stack.Navigator>

        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 10,
  },
});
