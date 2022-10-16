import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import PokemonOfTheDay from '../../components/pokemon/PokemonOfTheDay';
import DiscoverService from '../../services/DiscoverService';
import {
  selectColorOfTheDay,
  selectPokemonOfTheDay,
} from '../../store/DiscoverSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../types/navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import IconButton from '../../components/IconButton';
import { setCurrentPokemonName } from '../../store/PokemonSlice';

const discoverService = new DiscoverService();

const DiscoverPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const colorOfTheDay = useAppSelector(selectColorOfTheDay);
  const { pokemonOfTheDay, isLoadingPokemonOfTheDay } = useAppSelector(
    selectPokemonOfTheDay,
  );

  useEffect(() => {
    dispatch(discoverService.fetchPokemonOfTheDay());
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={colorOfTheDay} />
      <View
        accessibilityLabel="Pokémon of the day"
        style={{ ...styles.pokemonOfTheDay, backgroundColor: colorOfTheDay }}>
        <Icon
          name="pokeball"
          size={256}
          color={Colors.white}
          style={styles.bgPokeball}
        />
        {isLoadingPokemonOfTheDay ? (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size="large" color={Colors.white} />
          </View>
        ) : pokemonOfTheDay ? (
          <PokemonOfTheDay
            pokemon={pokemonOfTheDay}
            onPokemonPress={() => {
              dispatch(setCurrentPokemonName(pokemonOfTheDay.name));
              navigation.navigate('Pokemon');
            }}
          />
        ) : (
          <></>
        )}
      </View>
      <View style={styles.otherButtons}>
        <IconButton
          icon={<Icon name="pokeball" color={Colors.white} size={192} />}
          accessibilityLabel="Browse Pokédex"
          onPress={() => navigation.navigate('Types')}
        />
        <Text style={styles.pokedexText}>Browse Pokédex</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.darkGray,
  },
  pokemonOfTheDay: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
    minHeight: 300,
    paddingBottom: 15,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  bgPokeball: {
    position: 'absolute',
    top: -10,
    opacity: 0.5,
  },
  otherButtons: {
    position: 'relative',
    zIndex: 20,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokedexText: {
    marginTop: 16,
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  loadingWrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 24,
    height: 192,
  },
});

export default DiscoverPage;
