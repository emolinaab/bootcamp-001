import React, { useState, useEffect } from 'react'
import { View, Text, Platform, Image, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/PokemonInterfaces';
import { styles } from './../themes/appTheme';


const screenWidth = Dimensions.get('window').width


export const SearchScreen = () => {

  const {top} = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [ term, setTerm ] = useState('')
  const [ pokemonFiltered, setPokemonFiltered ] = useState<SimplePokemon[]>([]);

  useEffect(() => {

    if ( term.length === 0 ) {
      return setPokemonFiltered([]);
    }

    if ( isNaN( Number(term) ) ) {   
      setPokemonFiltered(
        simplePokemonList.filter( 
            (poke) => poke.name.toLocaleLowerCase().includes( term.toLowerCase() )
        )
      )
    } else {
      const pokemonbyID = simplePokemonList.find( (poke) => poke.id === term );
      setPokemonFiltered(
        ( pokemonbyID ) ? [pokemonbyID] : []
      )
    }


  }, [ term ])
  
 
  if ( isFetching ) {
    return <Loading/>
  }

  return (
    <View style={{ 
      flex: 1, 
      marginHorizontal: 20
      }}>

        <Image 
          source={ require('../assets/pokedex.png') } 
          style={ styles.pokebolaBG }
        />

      <SearchInput
        onDebounce={ (value) => setTerm( value ) }
        style={{ position: 'absolute', zIndex: 999, width: screenWidth - 40, top: ( Platform.OS === 'ios' ) ? top : top + 25 }}/>

      <FlatList
            data={ pokemonFiltered }
            keyExtractor={ (pokemon) => pokemon.id }
            showsVerticalScrollIndicator={ false }
            numColumns={ 2 }
            
            // Header
            ListHeaderComponent={(
              <Text style={{ 
                ...styles.title,
                ...styles.globalMargin,
                paddingBottom: 10,
                color: 'black',
                fontWeight: 'bold',
                marginTop: ( Platform.OS === 'ios' ) ? top + 60 : top + 80 
              }}>{ term }</Text>
              )}
              
              renderItem={ ({ item }) => (
                <PokemonCard pokemon={ item }/>
                )}
                   
        />

    </View>
  )
}

