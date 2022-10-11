import React, { useState, useEffect, useRef } from 'react'
import { Image, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';
import { FadeInImage } from './FadeinImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width

interface Props {
    pokemon: SimplePokemon;
}


export const PokemonCard = ( { pokemon }: Props ) => {

    const [ bgColor, setBgColor ] = useState('grey');
    const isMounted = useRef(true)
    const navigation = useNavigation();

    useEffect(() => {

        ImageColors.getColors( pokemon.picture, { fallback: 'grey' })
        .then( colors => {

            if( !isMounted.current ) return;

            ( colors.platform === 'android' )
                ? setBgColor( colors.dominant || 'grey' )
                : setBgColor( 'grey' )
        }).catch(console.log);

        return () => {
            isMounted.current = false
        }
      
    }, [])
    

  return (
    <TouchableOpacity
        activeOpacity={ 0.9 }
        onPress={ 
            () => navigation.navigate('PokemonScreen', {
                 simplePokemon: pokemon,
                 color: bgColor
                }) }
    >
        <View style={{ 
            ...styles.cardCointainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor
         }}>
            {/* Name and ID from POKEMON  */}
            <View>
                <Text style={{ ...styles.name, textTransform: 'uppercase' }}>
                    { pokemon.name }
                    { '\n#' + pokemon.id }
                </Text>
            </View>

            <View style={ styles.pokebolaContainer }>
                <Image
                    source={ require('../assets/pokebola-blanca.png') }
                    style={{ ...styles.pokebola }}
                />
            </View>
            
            <FadeInImage
                uri={ pokemon.picture }
                style={{ ...styles.PokemonImage }}
            />


        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    cardCointainer: {
        marginHorizontal: 10,
        // backgroundColor: 'gray',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top:20,
        left: 10,
        zIndex: 1,
    },
    pokebola: {
        width: 100,
        height:100,
        position: 'absolute',
        right: -20,
        bottom: -20,
    },
    PokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,
    },
    pokebolaContainer: {
        width:100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.6,
    }
});