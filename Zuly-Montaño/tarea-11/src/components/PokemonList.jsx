import React, {useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button, Image} from 'react-native';
import { color } from 'react-native-reanimated';
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
                <Text style={styles.texto}>CHARGING.....</Text>
                :
                <View style={styles.page}>
                    <Image 
                        source={require("../../assets/Pokemon.png")}
                        style={styles.pokemon}/>
                    {/* <Image 
                        source={require("../../assets/Pikachu.jpg")}
                        style={styles.pikachu}/> */}
                    <View style={styles.button}>
                        <Button
                            onPress={()=>setUrl(data.previous)}
                            title="Previous"
                            color= "#1374D3">
                        </Button>
                        <Text>{" "}</Text>
                        <Button
                            onPress={()=>setUrl(data.next)}
                            title="Next"
                            color= "#F4E54D"
                            >
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
        position: "relative",
        width: 150,
        height:50,
        left: 200,
        top: 20,
    },
    // pikachu: {
    //     position: "absolute",
    //     width: 60,a
    //     height:60,
    //     right: 5,
    // },
    button:{
        flexDirection: "row",
        position: "relative", 
        width:90,
        height:35,
        bottom: 10,
        left:15,
    },
    page: {
        height: 580,
        flexDirection: "column",
        paddingTop: 20,
    },
    texto: {
        textAlign:"center",
        fontWeight: "bold",
        fontSize:24,
    },
});

export default PokemonList;