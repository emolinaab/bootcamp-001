import React from 'react';
import { View, Text, FlatList,SafeAreaView } from 'react-native';
import { PokemonCard } from './PokemonCard';

export const Cards = ({results}) => {
    return (
        <View>
               <FlatList 
                data={ results }
                keyExtractor = { (item)=> item.name}
                renderItem = {({item, index}) =><PokemonCard item = {item}/>}/>
        </View>
    )
}