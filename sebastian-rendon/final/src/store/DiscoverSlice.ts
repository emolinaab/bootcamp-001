import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Pokemon } from '../types/pokemon';
import { RootState } from '.';
import { Colors, PokemonTypeColors } from '../theme/colors';

export type DiscoverState = {
  isLoadingPokemonOfTheDay: boolean;
  pokemonOfTheDay: Pokemon | undefined;
};

const initialState: DiscoverState = {
  isLoadingPokemonOfTheDay: false,
  pokemonOfTheDay: undefined,
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    setPokemonOfTheDay: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonOfTheDay = action.payload;
    },
    setIsLoadingPokemonOfTheDay: (state, action: PayloadAction<boolean>) => {
      state.isLoadingPokemonOfTheDay = action.payload;
    },
  },
});

export const selectPokemonOfTheDay = (state: RootState) => ({
  pokemonOfTheDay: state.discover.pokemonOfTheDay,
  isLoadingPokemonOfTheDay: state.discover.isLoadingPokemonOfTheDay,
});
export const selectColorOfTheDay = (state: RootState) =>
  state.discover.pokemonOfTheDay
    ? PokemonTypeColors[state.discover.pokemonOfTheDay.types[0]?.type.name]
    : Colors.pokemonRed;
export const { setPokemonOfTheDay, setIsLoadingPokemonOfTheDay } =
  discoverSlice.actions;

export default discoverSlice.reducer;
