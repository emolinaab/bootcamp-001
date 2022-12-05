import React, { useEffect } from 'react'
import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../themes/appTheme'
import { PokemonCard } from '../components/PokemonCard';

import SplashScreen from 'react-native-splash-screen';


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  

  return (
    <>
        <Image 
          source={ require('../assets/pokeedit.png') } 
          style={ styles.pokebolaBG }
        />

      <View style={{ alignItems: 'center' }}>
        <FlatList
            data={ simplePokemonList }
            keyExtractor={ (pokemon) => pokemon.id }
            showsVerticalScrollIndicator={ false }
            numColumns={ 2 }
            
            // Header
            ListHeaderComponent={(
              <View style={{ marginTop: top + 20, marginBottom: 30 }}>
                <Image source={ require('../assets/pokemonlogo.png') } style={{ width: 200, height: 70, transform: [{ rotate: '-10deg' }]}}/>
                 <Text style={{ 
                   ...styles.title,
                   ...styles.globalMargin,
                   top:  1,
                   marginBottom: top + 5,
                   paddingBottom: 6,
                   color: 'black',
                   fontWeight: 'bold',
                   left: 10,
                   transform: [
                    {
                      rotate: '-10deg'
                    }
                   ]
                 }}>POKEDEX</Text>
              </View>
              )}
              
              renderItem={ ({ item }) => (
                <PokemonCard pokemon={ item }/>
                )}
                
                // Infinite Scroll
                onEndReached={ loadPokemons }
                onEndReachedThreshold={ 0.4 }
                
                ListFooterComponent={(
                  <ActivityIndicator 
                  style={{ height: 100 }}
                  size={ 40 }
                  color="pink"
                  />
                  )}        
        />
      </View>

    </>
  )
}
