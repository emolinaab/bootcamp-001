import React from 'react';
import { PokemonApi } from '../api/PokemonApi';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../Colors";

export const PokemonCard = ({item}) => {
    const state = PokemonApi(item.url);
    const {charging,data} = state;
    const navigation = useNavigation();
    let backcolor = '';

    return (

        <View style={styles.container}>
            {
                charging
                ?
                <Text>charging</Text>
                :
                <View style={[styles.cards, {backgroundColor: backcolor =(colors(data.types[0].type.name))}]}>  
                    <View> 
                        <Text style={styles.id}>{data.id}</Text>
                    </View>
                    <View>
                        <Image 
                        source={{uri: data.sprites.front_default}}
                        style={styles.image}/>
                    </View>
                    <View> 
                        <Text style={styles.name}>{data.forms[0].name.toUpperCase()}{' '}</Text>
                    </View>
                    <View style={styles.button} >
                        <Button 
                            onPress={ () => navigation.navigate('INFORMATION', {
                                number: data.id,
                                namePokemon: data.forms[0].name,
                                img:  data.sprites.front_default,
                                height: data.height,
                                weight: data.weight,
                                type: data.types[0].type.name,
                                move: data.moves[0].move.name,
                                hp: data.stats[0].base_stat,
                                attack: data.stats[1].base_stat,
                                defense: data.stats[2].base_stat,
                                specialAttack: data.stats[3].base_stat,
                                specialDefense: data.stats[4].base_stat,
                                speed: data.stats[5].base_stat,
                                colorPokemon: colors(data.types[0].type.name),
                            })} 
                            title='ℹ️'
                            color= "#B0CFF3">
                        </Button>
                    </View>
             </View>
            }
        </View>
    )
}
const colors = (type) => {
    let backColor = '';
    if(type.toString() === 'grass'){
       backColor =  Colors.grass;
    }else if(type.toString() === 'water'){
        backColor =  Colors.water;
    }else if(type.toString() === 'fire'){
        backColor =  Colors.fire;
    }else if(type.toString() === 'electric'){
        backColor =  Colors.electric;
    }else if(type.toString() === 'psychic'){
        backColor =  Colors.psychic;
    }else if(type.toString() === 'poison'){
        backColor =  Colors.poison;
    }else if(type.toString() === 'bug'){
        backColor =  Colors.bug;
    }else if(type.toString() === 'flying'){
        backColor =  Colors.flying;
    }else if(type.toString() === 'fighting'){
        backColor =  Colors.fighting;
    }else if(type.toString() === 'normal'){
        backColor =  Colors.normal;
    }else if(type.toString() === 'rock'){
        backColor =  Colors.rock;
    }else if(type.toString() === 'ground'){
        backColor =  Colors.ground;
    }else if(type.toString() === 'ghost'){
        backColor =  Colors.ghost;
    }else if(type.toString() === 'dark'){
        backColor =  Colors.dark;
    }else if(type.toString() === 'steel'){
        backColor =  Colors.steel;
    }else if(type.toString() === 'fairy'){
        backColor =  Colors.fairy;
    }else if(type.toString() === 'dragon'){
        backColor =  Colors.dragon;
    }else if(type.toString() === 'ice'){
        backColor =  Colors.ice;
    }else if(type.toString() === 'unknown'){
        backColor =  Colors.unknown;
    }else{backColor= Colors.unknown}

    return backColor;
}

const styles = StyleSheet.create({
    container: {
        padding:10,
    },
    cards: {
        width: 360,
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center", 
        height: 100,
        borderRadius: 25,

    },
    button:{
        flexDirection: "column",
        width: 50,
        paddingTop: 20,

    },
    image: {
        width: 100,
        height:100,
    },
    id: {
        fontSize: 20,
        color: Colors.black,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        paddingTop: 27,
    },
    name: {
        fontSize: 15,
        color: Colors.black,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        paddingTop: 27,
    }
}); 