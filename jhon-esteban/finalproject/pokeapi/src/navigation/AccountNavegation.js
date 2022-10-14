import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/Account";

const Stack = createStackNavigator();

export default function AccountNavegation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Account" }}
      />
    </Stack.Navigator>
  );
}