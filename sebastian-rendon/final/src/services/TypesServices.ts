import { api } from '../config/axios';
import type { AppDispatch, RootState } from '../store';
import {
  addTypeToMap,
  setIsLoadingCurrentType,
  setIsLoadingTypes,
  setTypesList,
} from '../store/TypesSlice';
import { ResourceSummary } from '../types/pokemon';
import { PokemonType } from '../types/pokemonTypes';

export default class TypesService {
  fetchTypesList() {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      try {
        const state = getState();

        if (!state.types.typesList.length) {
          dispatch(setIsLoadingTypes(true));
          const response = await api.get('type');
          const typesList: ResourceSummary[] = response.data.results;
          dispatch(setIsLoadingTypes(false));
          dispatch(setTypesList(typesList));
        }
      } catch (error) {
        dispatch(setTypesList([]));
      } finally {
        setIsLoadingTypes(false);
      }
    };
  }

  fetchTypeByName(name: string) {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
      try {
        if (!name) return;

        const state = getState();
        if (!(name in state.types.typesDetailMap)) {
          dispatch(setIsLoadingCurrentType(true));
          const response = await api.get(`type/${name}`);
          const type: PokemonType = response.data;
          dispatch(addTypeToMap(type));
        }
      } catch (error) {
      } finally {
        dispatch(setIsLoadingCurrentType(false));
      }
    };
  }
}
