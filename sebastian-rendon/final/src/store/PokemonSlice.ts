import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Pokemon, ResourceMap, ResourceSummary } from '../types/pokemon';
import { RootState } from '.';
import { Colors, PokemonTypeColors } from '../theme/colors';

export type PokemonState = {
  isLoadingCurrentPokemon: boolean;
  currentPokemonName: string;
  pokemonDetailMap: ResourceMap<Pokemon>;
  isLoadingCurrentChain: boolean;
  currentChain: ResourceSummary[];
};

const initialState: PokemonState = {
  isLoadingCurrentPokemon: false,
  currentPokemonName: '',
  pokemonDetailMap: {},
  isLoadingCurrentChain: false,
  currentChain: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setIsLoadingCurrentPokemon: (state, action: PayloadAction<boolean>) => {
      state.isLoadingCurrentPokemon = action.payload;
    },
    setCurrentPokemonName: (state, action: PayloadAction<string>) => {
      state.currentPokemonName = action.payload;
    },
    addPokemonToMap: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonDetailMap = {
        ...state.pokemonDetailMap,
        ...{ [action.payload.name]: action.payload },
      };
    },
    setIsLoadingCurrentChain: (state, action: PayloadAction<boolean>) => {
      state.isLoadingCurrentChain = action.payload;
    },
    setCurrentChain: (state, action: PayloadAction<ResourceSummary[]>) => {
      state.currentChain = action.payload;
    },
  },
});

export const selectIsLoadingCurrentPokemon = (state: RootState) =>
  state.pokemon.isLoadingCurrentPokemon;
export const selectCurrentPokemonName = (state: RootState) =>
  state.pokemon.currentPokemonName;
export const selectCurrentPokemonId = (state: RootState) =>
  state.pokemon.pokemonDetailMap[state.pokemon.currentPokemonName]?.id || 0;
export const selectPokemonDetailMap = (state: RootState) =>
  state.pokemon.pokemonDetailMap;
export const selectCurrentPokemon = (state: RootState) =>
  state.pokemon.pokemonDetailMap[state.pokemon.currentPokemonName] || undefined;
export const selectPokemonColor = (state: RootState) => {
  const currentPokemon =
    state.pokemon.pokemonDetailMap[state.pokemon.currentPokemonName];

  return currentPokemon
    ? PokemonTypeColors[currentPokemon.types[0].type.name]
    : Colors.pokemonRed;
};
export const selectIsLoadingCurrentChain = (state: RootState) =>
  state.pokemon.isLoadingCurrentChain;
export const selectCurrentChain = (state: RootState) =>
  state.pokemon.currentChain;
export const {
  setIsLoadingCurrentPokemon,
  setCurrentPokemonName,
  addPokemonToMap,
  setIsLoadingCurrentChain,
  setCurrentChain,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
