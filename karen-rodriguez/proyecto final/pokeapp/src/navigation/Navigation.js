import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokedexNavegation from "./PokedexNavegation";


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavegation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => getPokeball(),
        }}
      />
    </Tab.Navigator>
  );
}

function getPokeball() {
  return (
    <Image
      source={require("../assets/pokedball.png")}
      style={{ width: 80, height: 80, top: -15 }}
    />
  );
}
