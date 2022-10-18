import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/CounterSlice';
import pokemonReducer from '../features/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    pokemon: pokemonReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>