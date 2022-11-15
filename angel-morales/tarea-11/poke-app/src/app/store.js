import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonReducer from "../features/pokemon/pokemonSlice";
import pokemonsReducer from "../features/pokemon/pokemonsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    pokemons: pokemonsReducer,
  },
});

export default store;
