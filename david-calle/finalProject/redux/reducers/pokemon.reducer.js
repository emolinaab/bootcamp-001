import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPokemons} from '@utils';

const initialState = {
  pokemon: [],
  selectedPokemon: null,
  next: null,
  prev: null,
  status: 'idle',
  error: '',
};

const pokemonReducer = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    setSelectedPokemon: (state, action) => {
      const id = action.payload;
      const selectedPokemon = state.pokemon.find(pokemon => pokemon.id === id);
      if (selectedPokemon) {
        state.selectedPokemon = selectedPokemon;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updatePokemons.pending, state => {
        state.status = 'loading';
      })
      .addCase(updatePokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pokemon = action.payload.results;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
      })
      .addCase(updatePokemons.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.payload;
      });
  },
});

export const updatePokemons = createAsyncThunk(
  'pokemon/updatePokemons',
  async ({next = false, prev = false}, {getState}) => {
    const {next: nextUrl, prev: prevUrl} = getState().pokemon;
    const url = next ? nextUrl : prev ? prevUrl : null;
    const response = await getPokemons(url);
    return response;
  },
);

export const {setSelectedPokemon} = pokemonReducer.actions;
export default pokemonReducer;
