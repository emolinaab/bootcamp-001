import { createSlice } from "@reduxjs/toolkit";
initialState = {
  pokemons: {},
};
const pokemonsSplice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = pokemonsSplice.actions;
export default pokemonsSplice.reducer;
