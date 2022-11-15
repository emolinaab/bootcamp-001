import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ResourceMap, ResourceSummary } from '../types/pokemon';
import type { PokemonType } from '../types/pokemonTypes';
import { RootState } from '.';
import { Colors, PokemonTypeColors } from '../theme/colors';

export type TypeState = {
  typesDetailMap: ResourceMap<PokemonType>;
  currentTypeName: string;
  isLoadingCurrentType: boolean;
  typesList: ResourceSummary[];
  paginationOptions: {
    limit: number;
    offset: number;
  };
  isLoadingTypes: boolean;
  search: string;
  currentTypeSearch: string;
};

const initialState: TypeState = {
  typesDetailMap: {},
  currentTypeName: '',
  isLoadingCurrentType: false,
  typesList: [],
  paginationOptions: {
    limit: 20,
    offset: 0,
  },
  isLoadingTypes: false,
  search: '',
  currentTypeSearch: '',
};

const typesSlice = createSlice({
  name: 'types',
  initialState,
  reducers: {
    setIsLoadingCurrentType: (state, action: PayloadAction<boolean>) => {
      state.isLoadingCurrentType = action.payload;
    },
    addTypeToMap: (state, action: PayloadAction<PokemonType>) => {
      state.typesDetailMap = {
        ...state.typesDetailMap,
        [action.payload.name]: action.payload,
      };
    },
    setCurrentTypeName: (state, action: PayloadAction<string>) => {
      state.currentTypeName = action.payload;
    },
    setTypesList: (state, action: PayloadAction<ResourceSummary[]>) => {
      state.typesList = action.payload;
    },
    setPaginationOptions: (
      state,
      action: PayloadAction<{ limit?: number; offset?: number }>,
    ) => {
      const limit = action.payload.limit ?? state.paginationOptions.limit;
      const offset = action.payload.offset ?? state.paginationOptions.offset;

      const maxPages = Math.floor(
        (state.typesDetailMap[state.currentTypeName]?.pokemon.length || 0) /
          limit,
      );

      if (offset <= maxPages && offset >= 0) {
        state.paginationOptions = {
          ...state.paginationOptions,
          ...action.payload,
        };
      }
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setIsLoadingTypes: (state, action: PayloadAction<boolean>) => {
      state.isLoadingTypes = action.payload;
    },
    setCurrentTypeSearch: (state, action: PayloadAction<string>) => {
      state.currentTypeSearch = action.payload;
    },
  },
});

export const selectCurrentTypeName = (state: RootState) =>
  state.types.currentTypeName;
export const selectCurrentType = (state: RootState) => {
  const { typesDetailMap, currentTypeName, currentTypeSearch } = state.types;

  if (!typesDetailMap[currentTypeName]) return undefined;

  return {
    ...typesDetailMap[currentTypeName],
    pokemon: typesDetailMap[currentTypeName]?.pokemon.filter(
      (pok) =>
        !currentTypeSearch || pok.pokemon.name.startsWith(currentTypeSearch),
    ),
  } as PokemonType;
};
export const selectIsLoadingCurrentType = (state: RootState) =>
  state.types.isLoadingCurrentType;
export const selectTypesList = (state: RootState) =>
  state.types.typesList.filter(
    (type) => !state.types.search || type.name.startsWith(state.types.search),
  );
export const selectCurrentTypeSearch = (state: RootState) =>
  state.types.currentTypeSearch;

export const selectSearch = (state: RootState) => state.types.search;
export const selectIsLoadingTypes = (state: RootState) =>
  state.types.isLoadingTypes;
export const selectTypeColor = (state: RootState) =>
  PokemonTypeColors[state.types.currentTypeName] || Colors.pokemonRed;
export const selectPaginationOptions = (state: RootState) =>
  state.types.paginationOptions;

export const {
  setIsLoadingCurrentType,
  setIsLoadingTypes,
  setSearch,
  setTypesList,
  setCurrentTypeName,
  setCurrentTypeSearch,
  setPaginationOptions,
  addTypeToMap,
} = typesSlice.actions;
export default typesSlice.reducer;
