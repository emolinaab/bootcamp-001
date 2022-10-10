import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPokemons, POKEMON_API_URL, searchPokemon} from '@utils';

const initialState = {
  pokemons: [],
  selectedPokemon: null,
  next: null,
  prev: null,
  status: 'idle',
  error: '',
  currentRequestId: undefined,
};

const pokemonReducer = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    setSelectedPokemon: (state, action) => {
      const selectedPokemon = action.payload;
      state.selectedPokemon = selectedPokemon;
    },
    clearSelectedPokemon: state => {
      state.selectedPokemon = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getInitialPokemons.pending, (state, action) => {
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(getInitialPokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pokemons = action.payload.results;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.currentRequestId = undefined;
      })
      .addCase(getInitialPokemons.rejected, (state, action) => {
        if (
          state.status === 'pending' &&
          state.currentRequestId === action.meta.requestId
        ) {
          state.status = 'idle';
          state.error = action.error.message;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getPokemonByName.pending, (state, action) => {
        state.status = 'pending';
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(getPokemonByName.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedPokemon = action.payload;
        state.currentRequestId = undefined;
      })
      .addCase(getPokemonByName.rejected, (state, action) => {
        if (
          state.status === 'pending' &&
          state.currentRequestId === action.meta.requestId
        ) {
          state.status = 'idle';
          state.error = action.error.message;
          state.currentRequestId = undefined;
        }
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
  async (args, {getState, rejectWithValue, requestId}) => {
    const {currentRequestId, status, next} = getState().pokemon;
    if (currentRequestId !== requestId || status !== 'pending') {
      return;
    }
    if (!next) {
      rejectWithValue('Action not allowed');
    }
    const response = await getPokemons(next);
    return response;
  },
);

export const getPrevPokemons = createAsyncThunk(
  'pokemon/updatePokemons',
  async (args, {getState, rejectWithValue, requestId}) => {
    const {currentRequestId, status, prev} = getState().pokemon;
    if (currentRequestId !== requestId || status !== 'pending') {
      return;
    }
    if (!prev) {
      return rejectWithValue('Action not allowed');
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
      return rejectWithValue('Action not allowed');
    }
  },
);

export const {setSelectedPokemon, clearSelectedPokemon} =
  pokemonReducer.actions;
export default pokemonReducer.reducer;
