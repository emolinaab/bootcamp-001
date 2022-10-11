import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab2ScreenTab2 } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () =>{
  return (
    <Tab.Navigator
        sceneContainerStyle={{ 
            backgroundColor: 'white'
         }}
        screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
            marginBottom: ( Platform.OS === 'ios' ) ? 0 : 10
        },
        tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'rgba(255,255,255, 0.90)',
            borderWidth: 0,
            elevation: 0,
            height: ( Platform.OS === 'ios' ) ? 80 : 60
        }
       }}>
      <Tab.Screen 
        name="HomeScreen" 
        component={ Tab1 }
        options={{ 
            tabBarLabel: "List",
            tabBarIcon: ({ color }) => (
                <Icon
                    name='list-outline'
                    color={ color } 
                    size={ 25 }
                />
            )
         }} 
      />
      <Tab.Screen 
        name="SearchScreen" 
        component={ Tab2ScreenTab2 }
        options={{ 
            tabBarLabel: "Search Pokemon",
            tabBarIcon: ({ color }) => (
                <Icon
                    name='search-outline'
                    color={ color } 
                    size={ 25 }
                />
            )
         }} 
      />
    </Tab.Navigator>
  );
}