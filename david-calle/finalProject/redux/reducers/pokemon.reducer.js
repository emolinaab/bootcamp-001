import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPokemons, POKEMON_API_URL} from '@utils';

const initialState = {
  pokemons: [],
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
      const selectedPokemon = state.pokemons.find(pokemon => pokemon.id === id);
      if (selectedPokemon) {
        state.selectedPokemon = selectedPokemon;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getInitialPokemons.pending, state => {
        state.status = 'loading';
      })
      .addCase(getInitialPokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pokemons = action.payload.results;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
      })
      .addCase(getInitialPokemons.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      });
  },
});

export const getInitialPokemons = createAsyncThunk(
  'pokemon/updatePokemons',
  async () => {
    const initialRoute = `${POKEMON_API_URL}/pokemon/?limit=4`;
    const response = await getPokemons(initialRoute);
    return response;
  },
);

export const getNextPokemons = createAsyncThunk(
  'pokemon/updatePokemons',
  async (args, {getState, rejectWithValue}) => {
    const {next} = getState().pokemon;
    if (!next) {
      rejectWithValue('Action not allowed');
    }
    const response = await getPokemons(next);
    return response;
  },
);

export const getPrevPokemons = createAsyncThunk(
  'pokemon/updatePokemons',
  async (args, {getState, rejectWithValue}) => {
    const {prev} = getState().pokemon;
    if (!prev) {
      rejectWithValue('Action not allowed');
    }
    const response = await getPokemons(prev);
    return response;
  },
);

export const {setSelectedPokemon} = pokemonReducer.actions;
export default pokemonReducer.reducer;
