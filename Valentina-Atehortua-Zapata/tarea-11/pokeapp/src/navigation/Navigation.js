import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoriteNavegation from "./FavoriteNavegation";
import PokedexNavegation from "./PokedexNavegation";
import AccountNavegation from "./AccountNavegation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavegation}
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavegation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => getPokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavegation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
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
