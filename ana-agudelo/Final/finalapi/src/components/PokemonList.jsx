import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, Image} from 'react-native';
import { PokemonApi } from '../api/PokemonApi';
import { Cards } from './Cards';

const PokemonList = () => {
    const [url, setUrl]= useState('https://pokeapi.co/api/v2/pokemon');
    const state = PokemonApi(url); 
    const {charging, data} = state;
    
    return(
        <SafeAreaView>
            {
                charging
                ?
                <Text>CHARGING.....</Text>
                :
                <View style={styles.page}>
                    <Image 
                        source={require("../../assets/Pokemon.png")}
                        style={styles.pokemon}/>
                    <Image 
                        source={require("../../assets/Pikachu.png")}
                        style={styles.pikachu}/>
                    <View style={styles.button}>
                        <Button
                            onPress={()=>setUrl(data.previous)}
                            title="Previous"
                            color= "#717171">
                        </Button>
                        <Text>{" "}</Text>
                        <Button
                            onPress={()=>setUrl(data.next)}
                            title="Next"
                            color= "#717171">
                        </Button>
                    </View>
                    <Cards results={data.results}/>   
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    pokemon: {
        position: 'relative',
        width: 200,
        height:50,
        left: 90
    },
    pikachu: {
        position: 'absolute',
        width: 50,
        height:50,
        right: 5,
    },
    button:{
        flexDirection: 'row',
        position: 'relative',
    },
    page: {
        height: 580,
        flexDirection: 'column',
        paddingTop: 20,
    }
});

export default PokemonList;