import React from 'react';
import { View, StyleSheet } from 'react-native';
import { usePokemonImageFromObject } from '../../hooks/pokemon';
import type { Pokemon } from '../../types/pokemon';
import PokemonTypeChip from './PokemonTypeChip';
import PokemonBasicInfo from './PokemonBasicInfo';

type PokemonOfTheDayProps = {
  pokemon: Pokemon;
  onPokemonPress?: Function;
};

const PokemonOfTheDay = ({
  pokemon,
  onPokemonPress = () => {},
}: PokemonOfTheDayProps) => {
  const pokemonUri = usePokemonImageFromObject(pokemon) || '';

  return (
    <View style={styles.container}>
      <PokemonBasicInfo
        pokemonName={pokemon.name}
        pokemonUri={pokemonUri}
        pokemonId={pokemon.id}
        onPress={onPokemonPress}
      />
      <View style={styles.typesChips}>
        {pokemon.types.map((type) => (
          <PokemonTypeChip key={type.type.name} type={type.type.name} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 4,
  },
  bgPokeball: {
    position: 'absolute',
    top: 0,
    opacity: 0.5,
    transform: [{ rotate: '-45deg' }],
  },
  typesChips: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default PokemonOfTheDay;
