import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppSelector } from '../../hooks/redux';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  selectCurrentChain,
  selectIsLoadingCurrentChain,
  selectPokemonColor,
} from '../../store/PokemonSlice';
import { Colors } from '../../theme/colors';
import PokemonBasicInfo from '../../components/pokemon/PokemonBasicInfo';
import { getPokemonImageSet } from '../../util/pokemon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootBottomTabsParamList } from '../../types/navigation';

const EvolutionDetailPage = () => {
  useNavigation<BottomTabNavigationProp<RootBottomTabsParamList>>();
  const pokemonColor = useAppSelector(selectPokemonColor);
  const currentChain = useAppSelector(selectCurrentChain);
  const isLoadingCurrentChain = useAppSelector(selectIsLoadingCurrentChain);

  const currentChainImages = currentChain.map((chain) => {
    const urlSplit = chain.url.split('/');
    const pokemonSpeciesId = Number.parseInt(urlSplit[urlSplit.length - 2], 10);

    return getPokemonImageSet(pokemonSpeciesId);
  });

  const [currentChainImagesIndex, setCurrentChainImagesIndex] = useState(
    new Array(currentChainImages.length).fill(0),
  );

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={pokemonColor} />
      <View
        style={{
          ...styles.bgTopPart,
          backgroundColor: pokemonColor,
        }}
      />
      <View style={styles.bgBottomPart} />
      {isLoadingCurrentChain ? (
        <Text>Loading</Text>
      ) : currentChain.length ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainerStyle}
          style={styles.pokemonMain}>
          {currentChain.map((chain, i) => (
            <View key={chain.name}>
              <PokemonBasicInfo
                pokemonName={chain.name}
                pokemonUri={currentChainImages[i][currentChainImagesIndex[i]]}
                showBackgroundShadow={false}
                onImageLoadError={() => {
                  setCurrentChainImagesIndex(
                    currentChain.map((_item, j) => (j === i ? 1 : 0)),
                  );
                }}
              />
              {i < currentChain.length - 1 ? (
                <View style={styles.chainIconWrapper}>
                  <Icon name="chevron-triple-down" style={styles.chainIcon} />
                </View>
              ) : (
                <></>
              )}
            </View>
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  bgTopPart: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  bgBottomPart: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '95%',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    backgroundColor: Colors.darkGray,
  },
  pokemonMain: {
    display: 'flex',
    position: 'relative',
    zIndex: 10,
  },
  pokemonImage: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 192,
    overflow: 'visible',
  },
  typesChips: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pokemonDimensions: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pokemonDimensionTitle: {
    paddingHorizontal: 4,
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  pokemonDimensionValue: {
    textAlign: 'center',
    paddingHorizontal: 4,
    color: Colors.white,
    fontWeight: '600',
  },
  scrollContainerStyle: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  chainIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  chainIcon: {
    fontSize: 24,
    color: Colors.white,
  },
});

export default EvolutionDetailPage;
