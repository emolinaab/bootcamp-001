import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screens/Favorite";

const Stack = createStackNavigator();

export default function FavoriteNavegation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: "Favorite" }}
      />
    </Stack.Navigator>
  );
}
