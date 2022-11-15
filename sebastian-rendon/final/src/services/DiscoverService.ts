import { api } from '../config/axios';
import type { AppDispatch } from '../store';
import {
  setIsLoadingPokemonOfTheDay,
  setPokemonOfTheDay,
} from '../store/DiscoverSlice';
import { Pokemon } from '../types/pokemon';

export default class DiscoverService {
  readonly TOTAL_POKEMONS = 905;

  fetchPokemonOfTheDay() {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setIsLoadingPokemonOfTheDay(true));
        const randomPokemonId = Math.ceil(Math.random() * this.TOTAL_POKEMONS);
        const response = await api.get(`pokemon/${randomPokemonId}`);
        const pokemon: Pokemon = response.data;
        dispatch(setPokemonOfTheDay(pokemon));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setIsLoadingPokemonOfTheDay(false));
      }
    };
  }
}
