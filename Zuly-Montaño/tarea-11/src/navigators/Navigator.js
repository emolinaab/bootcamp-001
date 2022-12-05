import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Information from '../screens/Information';
import Main from '../screens/Main';


const Stack = createStackNavigator();

export default function Navigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= 'MAIN'
                component = {Main}
            />
            <Stack.Screen 
                name= 'INFORMATION'
                component = {Information}
            />

        </Stack.Navigator>
    )
}