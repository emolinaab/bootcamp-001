import { configureStore } from '@reduxjs/toolkit';
import discoverReducer from './DiscoverSlice';
import typesReducer from './TypesSlice';
import pokemonReducer from './PokemonSlice';

export function setupStore() {
  return configureStore({
    reducer: {
      discover: discoverReducer,
      types: typesReducer,
      pokemon: pokemonReducer,
    },
    preloadedState: {
      pokemon: {
        isLoadingCurrentPokemon: false,
        currentPokemonName: '',
        pokemonDetailMap: {},
        isLoadingCurrentChain: false,
        currentChain: [],
      },
      discover: {
        isLoadingPokemonOfTheDay: false,
        pokemonOfTheDay: undefined,
      },
      types: {
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
      },
    },
  });
}

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
