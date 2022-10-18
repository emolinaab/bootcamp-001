import React, { useEffect, useState } from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    SafeAreaView, 
} from "react-native";
import { PokemonClient } from "pokenode-ts";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemon } from "../features/pokemon/pokemon";
import { increment,decrement } from "../features/counter/counterSlice";
import Pokemon, {Stats} from "../models/Pokemon";
import { Colors } from "../colors";

const PokemonList = () => {
    const dispatch = useAppDispatch();
    const currentPokemon = useAppSelector(state => state.pokemon);
    const counter = useAppSelector(state => state.counter.value);

    useEffect(() => {
        const fetchPokemon = async () => {
            const api = new PokemonClient();
            await api
            .getPokemonById(counter)
            .then(pokemon => {
                const pokemonStats: Stats = {
                    hp: pokemon.stats[0].base_stat,
                    attack: pokemon.stats[1].base_stat,
                    defense: pokemon.stats[2].base_stat,
                    specialAttack: pokemon.stats[3].base_stat,
                    specialDefense: pokemon.stats[4].base_stat,
                    speed: pokemon.stats[5].base_stat,
                };
                const newPokemon: Pokemon = {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+
                    pokemon.id+ '.png',
                    height: pokemon.height,
                    weight: pokemon.weight,
                    type: pokemon?.types[0]?.type?.name?.toString(),
                    move: pokemon?.moves[0]?.move?.name?.toString(),
                    stats: pokemonStats,
                    color: pokemon?.types[0]?.type?.name?.toString() === 'steel'
                    ? Colors.steel
                    :pokemon?.types[0]?.type?.name?.toString() === 'water'
                    ? Colors.water
                    :pokemon?.types[0]?.type?.name?.toString() === 'bug'
                    ? Colors.bug
                    :pokemon?.types[0]?.type?.name?.toString() === 'dragon'
                    ? Colors.dragon
                    :pokemon?.types[0]?.type?.name?.toString() === 'electric'
                    ? Colors.electric
                    :pokemon?.types[0]?.type?.name?.toString() === 'ghost'
                    ? Colors.ghost
                    :pokemon?.types[0]?.type?.name?.toString() === 'fire'
                    ? Colors.fire
                    :pokemon?.types[0]?.type?.name?.toString() === 'fairy'
                    ? Colors.fairy
                    :pokemon?.types[0]?.type?.name?.toString() === 'ice'
                    ? Colors.ice
                    :pokemon?.types[0]?.type?.name?.toString() === 'fighting'
                    ? Colors.fighting
                    :pokemon?.types[0]?.type?.name?.toString() === 'normal'
                    ? Colors.normal
                    :pokemon?.types[0]?.type?.name?.toString() === 'plant'
                    ? Colors.plant
                    :pokemon?.types[0]?.type?.name?.toString() === 'psychic'
                    ? Colors.psychic
                    :pokemon?.types[0]?.type?.name?.toString() === 'rock'
                    ? Colors.rock
                    :pokemon?.types[0]?.type?.name?.toString() === 'sinister'
                    ? Colors.sinister
                    :pokemon?.types[0]?.type?.name?.toString() === 'eart'
                    ? Colors.eart
                    :pokemon?.types[0]?.type?.name?.toString() === 'poison'
                    ? Colors.poison
                    :pokemon?.types[0]?.type?.name?.toString() === 'flying'
                    ? Colors.flying
                    :pokemon?.types[0]?.type?.name?.toString() === 'grass'
                    ? Colors.grass
                    :Colors.black,
                };
                dispatch(setPokemon(newPokemon));
            })
            .catch(err => {
                console.log(err);
            })
        }
        fetchPokemon();    
    },[counter, dispatch]);

    const nextPokemonButton = () => {
        dispatch(increment());
    }
    const prevPokemonButton = () => {
        dispatch(decrement());
    }

    const StatLine = (props: {
        number: number | undefined;
        color: string | undefined;
    }) => {
        return (
            <View
                style={{
                    width: props.number,
                    marginVertical: 6,
                    height: 5,
                    marginLeft: 10,
                    borderRadius: 5,
                    backgroundColor: props.color,
                }}
            />
        )
    }
    return (
        <View style={[styles.container, {backgroundColor: currentPokemon.color}]}>
            <SafeAreaView>
                {/*name & number*/}
                <View style={[styles.row, {height: 100}]}>
                    <Text style={styles.pokemonName}>
                        {currentPokemon.name.charAt(0).toUpperCase() + 
                        currentPokemon.name.slice(1)}
                    </Text>
                    <Text 
                    style={[styles.pokemonName,
                    {textAlign: 'right', marginRight: 20, fontSize: 25},
                    ]}>
                    #{currentPokemon.id}
                    </Text>
                </View>
                {/*Image & buttons*/}
                <View style={styles.row}>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={prevPokemonButton}>
                            <Text style={styles.buttonText}>◀</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        style={styles.pokemonImage}
                        source={{uri: currentPokemon.image}}
                        reziseMode='cover'
                    />
                    <View>
                         <TouchableOpacity style={styles.button} onPress={nextPokemonButton}>
                            <Text style={styles.buttonText}>▶</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.featuresContainer}>
                    {/*Type*/}
                    <View>
                        <Text style={[
                            styles.pokemonType,
                            {alignSelf: 'center', backgroundColor: currentPokemon.color}
                            ]}>
                            {currentPokemon.type}
                            </Text>
                    </View>
                    {/*About*/}
                    <View>
                        <Text style={styles.aboutInfo}>
                            About
                        </Text>
                        <View style={[styles.row, {justifyContent: 'center', marginTop: 20}]}>
                            <View style={{alignItems: 'center', marginHorizontal: 10}}>
                                <Text>
                                    💪🏻{''}
                                    {currentPokemon.weight
                                        ?.toString()
                                    .slice(
                                        currentPokemon.weight.toString().length - 1,
                                        currentPokemon.weight.toString().length,
                                    )}{''}
                                    kg
                                </Text>
                                <Text
                                style={{color: Colors.black, fontSize: 12, marginTop:10}}>
                                    Weight
                                </Text>
                            </View>
                            <View style={{alignItems: 'center', marginHorizontal: 10}}>
                                <Text>
                                    📏{''}
                                    {currentPokemon.height
                                        ?.toString()    
                                        .slice(0, currentPokemon.height.toString().length - 1)}
                                        .
                                        {currentPokemon.height
                                        ?.toString()
                                        .slice(
                                            currentPokemon.height.toString().length - 1,
                                            currentPokemon.height.toString().length,
                                        )}{''}
                                        m
                                </Text>
                                <Text
                                style={{color: Colors.black, fontSize: 12, marginTop:10}}>
                                    Height
                                </Text>
                            </View>
                            <View style= {{alignItems: 'center', marginHorizontal: 10}}>
                                <Text>{currentPokemon.move}</Text>
                                <Text
                                    style={{color: Colors.black, fontSize: 12, marginTop: 10}}>
                                    Move
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/*Abilities*/}
                    <View>
                        <Text style={styles.abilitiesTitle}>
                            Base Stats
                        </Text>
                        <View style={[
                            styles.row,
                            {
                                justifyContent: 'flex-start',
                                marginHorizontal: 30,
                                marginTop: 20,

                            }
                            ]}>
                            <View style={{alignItems: 'flex-end', marginRight: 10}}>
                                <Text>HP</Text>
                                <Text>Attack</Text>
                                <Text>Defense</Text>
                                <Text>Special Attack</Text>
                                <Text>Special Defense</Text>
                                <Text>Speed</Text>
                            </View>
                            <View style={styles.abilitiesInfo}>
                            </View>
                            <View>
                                <Text>{currentPokemon.stats?.hp}</Text>
                                <Text>{currentPokemon.stats?.attack}</Text>
                                <Text>{currentPokemon.stats?.defense}</Text>
                                <Text>{currentPokemon.stats?.specialAttack}</Text>
                                <Text>{currentPokemon.stats?.specialDefense}</Text>
                                <Text>{currentPokemon.stats?.speed}</Text>
                            </View>
                            <View>
                                <StatLine
                                    number={currentPokemon.stats?.hp}
                                    color={currentPokemon.color}
                                />
                                <StatLine
                                    number={currentPokemon.stats?.attack}
                                    color={currentPokemon.color}
                                />
                                <StatLine
                                    number={currentPokemon.stats?.defense}
                                    color={currentPokemon.color}
                                />
                                <StatLine
                                    number={currentPokemon.stats?.specialAttack}
                                    color={currentPokemon.color}
                                />
                                <StatLine
                                    number={currentPokemon.stats?.specialDefense}
                                    color={currentPokemon.color}
                                />
                                <StatLine
                                    number={currentPokemon.stats?.speed}
                                    color={currentPokemon.color}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};
export default PokemonList;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.black,
    },
    pokemonName: {
        fontSize: 35,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 20,
    },
    pokemonImage: {
        width: 200,
        height: 200,
    },
    button: {
        widht: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        fontSize: 40,
        color: Colors.white,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pokemonType: {
        color: Colors.white,
        paddingHorizontal: 100,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    featuresContainer: {
        bottom: 30,
        left: 10,
        borderRadius: 10,
        backgroundColor: Colors.white,
        width: '95%',
        height: 350,
        marginTop: 30,
    },
    aboutInfo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        color: Colors.black,
    },
    abilitiesTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        color: Colors.black,
    },
    abilitiesInfo: {
        height: 100,
        width: 2,
        backgroundColor: Colors.black,
        marginRight: 10,
    },
    search:{
        widht: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgrouncolor: Colors.white,
    },
})