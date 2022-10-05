import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {getPokemons, pokemonDataType} from '@utils';

type stateType = {
  pokemon: pokemonDataType[];
  next: string | null;
  prev: string | null;
  selectedPokemon: pokemonDataType | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
};

export const getInitialPokemons = createAsyncThunk(
  'pokemon/getInitialPokemons',
  async () => {
    try {
      const response = await getPokemons();
      return response;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getNextPokemons = createAsyncThunk(
  'pokemon/getNextPokemons',
  async ({getState}) => {
      try {
        const response = await getPokemons(getState().pokemon.next);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
);

export const getPrevPokemons = createAsyncThunk(
  'pokemon/getPrevPokemons',
  async ({getState}) => {
    try {
      const response = await getPokemons(getState().pokemon.prev);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: stateType = {
  pokemon: [],
  selectedPokemon: null,
  next: null,
  prev: null,
  status: 'idle',
  error: "",
}

const pokemonReducer = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    setSelectedPokemon: (state, action) => {
      const id = action;
      state.selectedPokemon = state.pokemon.find(pokemon => pokemon.id === id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialPokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getInitialPokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pokemon = action.payload.results;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
      })
      .addCase(getInitialPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? "Hubo un error inesperado";
      })
      .addCase(getNextPokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNextPokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pokemon = action.payload.results;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
      })
      .addCase(getNextPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? "Hubo un error inesperado";
      })
      .addCase(getPrevPokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPrevPokemons.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pokemon = action.payload.results;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
      })
      .addCase(getPrevPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? "Hubo un error inesperado";
      });

  }
});

export const {setSelectedPokemon} = pokemonReducer.actions;
export default pokemonReducer;
