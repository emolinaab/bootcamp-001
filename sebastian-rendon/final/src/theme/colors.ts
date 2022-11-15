import { PokemonTypes } from '../types/pokemonTypes';

type Color = {
  [key: string]: string;
  pokemonRed: string;
  pokemonRedLighter: string;
  pokemonRedDarker: string;
  white: string;
  gray: string;
  slateGray: string;
  darkGray: string;
  black: string;
  lightGray: string;
};

export const Colors: Color = {
  pokemonRed: '#ff5656',
  pokemonRedLighter: '#ff6767',
  pokemonRedDarker: '#cc4444',
  white: '#fff',
  gray: '#a9a9a9',
  black: '#000',
  slateGray: '#32353d',
  darkGray: '#131417',
  lightGray: '#f2f2f2',
};

export const PokemonTypeColors: PokemonTypes = {
  grass: '#8ddb8a',
  water: '#92b8f7',
  fire: '#ffad76',
  electric: '#facd56',
  psychic: '#ff96b4',
  poison: '#d583c5',
  bug: '#c4d368',
  flying: '#cfbaf8',
  fighting: '#f37a75',
  normal: '#a1a3a0',
  rock: '#eec76f',
  ground: '#efc870',
  ghost: '#a995be',
  dark: '#a79187',
  steel: '#2195a5',
  fairy: '#ffb1c0',
  dragon: '#ae7cfc',
  ice: '#aae6e6',
  unknown: '#68a090',
  shadow: '#3e3355',
};

export const PokemonStatsColor: { [key: string]: string } = {
  hp: PokemonTypeColors.pokemonRed,
  atk: PokemonTypeColors.fire,
  def: PokemonTypeColors.electric,
  satk: PokemonTypeColors.water,
  sdef: PokemonTypeColors.grass,
  spd: PokemonTypeColors.fairy,
};
