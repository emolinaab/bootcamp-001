import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/PokemonInterfaces';
import { FadeInImage } from './FadeinImage';

interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props ) => {

    const formatter = new Intl.NumberFormat();

  return (
    <ScrollView
        showsVerticalScrollIndicator={ false } 
        style={{ 
            ...StyleSheet.absoluteFillObject,
     }}>

        {/* Types and weight */}
        <View style={{ 
            ...styles.container,
            marginTop: 375
         }}>
            <Text style={{ ...styles.title }}>Type</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map( ({type}) => (
                            <Text
                                style={{ ...styles.regularText, marginRight: 5 }}
                                key={ type.name }
                            >
                                { type.name}
                            </Text>
                        ))
                    }
                </View>
            {/* Weight */}
            <Text style={{ ...styles.title }}>Weight</Text>
            <Text style={{ ...styles.regularText }}>{ formatter.format((pokemon.weight * 100)/1000) } Kg</Text>
        </View>

        {/* Sprites */}
        <View style={{ 
            ...styles.container
         }}>
            <Text style={{ ...styles.title }}>Sprites</Text>
            <ScrollView
                // style={{  }}
                horizontal= { true }
                showsHorizontalScrollIndicator={ false }
            >
                <FadeInImage
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprites }
                />
                <FadeInImage
                    uri={ pokemon.sprites.back_default }
                    style={ styles.basicSprites }
                />
                <FadeInImage
                    uri={ pokemon.sprites.front_shiny }
                    style={ styles.basicSprites }
                />
                <FadeInImage
                    uri={ pokemon.sprites.back_shiny }
                    style={ styles.basicSprites }
                />
            </ScrollView>

        </View>
        
        {/* Abilities */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Base Abilities</Text>
            <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map( ({ability}) => (
                            <Text
                                style={{ ...styles.regularText, marginRight: 5 }}
                                key={ ability.name }
                            >
                                { ability.name}
                            </Text>
                        ))
                    }
                </View>
        </View>

        {/* Movements */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Movements</Text>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        pokemon.moves.map( ({move}) => (
                            <Text
                                style={{ ...styles.regularText, marginRight: 5 }}
                                key={ move.name }
                            >
                                { move.name}
                            </Text>
                        ))
                    }
                </View>
        </View>

        {/* Stats */}
        <View style={ styles.container }>
            <Text style={ styles.title }>Stats</Text>
            <View>
                {
                    pokemon.stats.map( ( stat, i ) => (
                        <View 
                        style={{ flexDirection: 'row' }}
                        key={ stat.stat.name + i }>
                            <Text
                                style={{ 
                                    ...styles.regularText, 
                                    marginRight: 10, 
                                    width:150 
                                }}
                                >
                                { stat.stat.name}
                            </Text>
                            <Text
                                style={{ 
                                    ...styles.regularText,
                                    fontWeight: 'bold'
                                }}
                                >
                                { stat.base_stat}
                            </Text>
                        </View>
                    ))
                }
            </View>

            {/* Final Sprite */}
            <View style={{ 
                marginBottom: 70,
                alignItems: 'center'
             }}>
                <FadeInImage
                    uri={ pokemon.sprites.front_default }
                    style={ styles.basicSprites }
                />
            </View>

        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        color: 'black'
    },
    regularText: {
        fontSize: 19,
        color: 'black'
    },
    basicSprites: {
        width: 100,
        height: 100,
        color: 'black'
    }
});