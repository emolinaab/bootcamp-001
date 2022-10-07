import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPokemons, POKEMON_API_URL, searchPokemon} from '@utils';

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
      const selectedPokemon = action.payload;
      state.selectedPokemon = selectedPokemon;
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
      })
      .addCase(getPokemonByName.pending, state => {
        state.status = 'loading';
      })
      .addCase(getPokemonByName.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedPokemon = action.payload;
      })
      .addCase(getPokemonByName.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      });
  },
});

export const getInitialPokemons = createAsyncThunk(
  'pokemon/updatePokemons',
  async () => {
    const initialRoute = `${POKEMON_API_URL}/pokemon/?limit=10`;
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

export const getPokemonByName = createAsyncThunk(
  'pokemon/getPokemonByName',
  async (pokemonName, {rejectWithValue}) => {
    try {
      const response = await searchPokemon(pokemonName);
      return response;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const {setSelectedPokemon} = pokemonReducer.actions;
export default pokemonReducer.reducer;
