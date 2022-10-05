import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon.reducer";

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});

export default rootReducer;