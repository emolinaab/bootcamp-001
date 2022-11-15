import { api } from '../config/axios';
import { AppDispatch, RootState } from '../store';
import {
  addPokemonToMap,
  setCurrentChain,
  setIsLoadingCurrentChain,
  setIsLoadingCurrentPokemon,
} from '../store/PokemonSlice';
import { EvolutionChain } from '../types/evolution';
import type { Pokemon, ResourceSummary } from '../types/pokemon';
import { PokemonSpecies } from '../types/pokemonSpecies';

export default class PokemonService {
  fetchPokemonDetail(name: string) {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      try {
        if (!name) return;

        const state = getState();
        if (!(name in state.pokemon.pokemonDetailMap)) {
          dispatch(setIsLoadingCurrentPokemon(true));
          const data: Pokemon = (await api.get(`pokemon/${name}`)).data;
          dispatch(addPokemonToMap(data));
        }
      } catch (error) {
      } finally {
        dispatch(setIsLoadingCurrentPokemon(false));
      }
    };
  }

  fetchEvolutionChainFromPokemonName(name: string) {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      try {
        if (!name) return;

        dispatch(setIsLoadingCurrentChain(true));

        const speciesResponse: PokemonSpecies = (
          await api.get(`pokemon-species/${name}`)
        ).data;
        const evolutionChainResponse: EvolutionChain = (
          await api({
            baseURL: speciesResponse.evolution_chain.url,
          })
        ).data;

        const chain: ResourceSummary[] = [];
        let chainData = evolutionChainResponse.chain;
        do {
          chain.push({
            ...chainData.species,
          });
          chainData = chainData.evolves_to[0];
        } while (chainData && 'evolves_to' in chainData);

        dispatch(setCurrentChain(chain));
      } catch (error) {
        dispatch(setCurrentChain([]));
      } finally {
        dispatch(setIsLoadingCurrentChain(false));
      }
    };
  }
}
