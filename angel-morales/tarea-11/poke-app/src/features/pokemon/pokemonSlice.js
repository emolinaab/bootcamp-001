import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  img: " ",
  name: "",
  type: "",
  stats: {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  },
};

const pokemonSplice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.id = action.payload.id;
      state.img = action.payload.img;
      state.name = action.payload.name;
      state.stats.hp = action.payload.stats.hp;
      state.stats.attack = action.payload.stats.attack;
      state.stats.defense = action.payload.stats.defense;
      state.stats.specialAttack = action.payload.stats.specialAttack;
      state.stats.specialDefense = action.payload.stats.specialDefense;
      state.stats.speed = action.payload.stats.speed;
      state.type = action.payload.type;
    },
  },
});

export const { setPokemon } = pokemonSplice.actions;
export default pokemonSplice.reducer;
