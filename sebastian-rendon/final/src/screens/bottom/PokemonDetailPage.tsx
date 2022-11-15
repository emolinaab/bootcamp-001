import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import PokemonTypeChip from '../../components/pokemon/PokemonTypeChip';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import PokemonService from '../../services/PokemonService';
import {
  selectCurrentPokemon,
  selectCurrentPokemonName,
  selectIsLoadingCurrentPokemon,
  selectPokemonColor,
} from '../../store/PokemonSlice';
import { Colors } from '../../theme/colors';
import PokemonStats from '../../components/pokemon/PokemonStats';
import { usePokemonImageFromObject } from '../../hooks/pokemon';

const pokemonService = new PokemonService();

const PokemonDetailPage = () => {
  const dispatch = useAppDispatch();
  const isLoadingCurrentPokemon = useAppSelector(selectIsLoadingCurrentPokemon);
  const currentPokemonName = useAppSelector(selectCurrentPokemonName);
  const currentPokemon = useAppSelector(selectCurrentPokemon);
  const pokemonColor = useAppSelector(selectPokemonColor);

  const pokemonUri = usePokemonImageFromObject(currentPokemon);

  useEffect(() => {
    dispatch(
      pokemonService.fetchEvolutionChainFromPokemonName(currentPokemonName),
    );
    dispatch(pokemonService.fetchPokemonDetail(currentPokemonName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPokemonName]);

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
      {isLoadingCurrentPokemon ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color={Colors.white} />
        </View>
      ) : currentPokemon ? (
        <View style={styles.pokemonMain}>
          <View style={styles.pokemonImageWrapper}>
            <FastImage
              style={styles.pokemonImage}
              source={{ uri: pokemonUri, priority: FastImage.priority.high }}
            />
          </View>
          <View style={styles.typesChips}>
            {currentPokemon.types.map((type) => (
              <PokemonTypeChip key={type.type.name} type={type.type.name} />
            ))}
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.pokemonDimensions}>
              <View>
                <Text style={styles.pokemonDimensionTitle}>Height</Text>
                <Text style={styles.pokemonDimensionValue}>
                  {`${currentPokemon.height / 10} m`}
                </Text>
              </View>
              <View>
                <Text style={styles.pokemonDimensionTitle}>Weight</Text>
                <Text style={styles.pokemonDimensionValue}>
                  {`${currentPokemon.weight / 10} kg`}
                </Text>
              </View>
            </View>
            <PokemonStats stats={currentPokemon.stats} />
          </ScrollView>
        </View>
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
    height: '75%',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    backgroundColor: Colors.darkGray,
  },
  pokemonMain: {
    position: 'relative',
    zIndex: 10,
    top: 75,
  },
  pokemonImageWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 192,
    overflow: 'visible',
  },
  pokemonImage: {
    width: 192,
    height: 192,
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
  loadingWrapper: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokemonDetailPage;
