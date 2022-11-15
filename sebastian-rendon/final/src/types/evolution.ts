import { ResourceSummary } from './pokemon';

export type EvolutionChain = {
  baby_trigger_item: any | null;
  id: number;
  chain: Evolution;
};

export type Evolution = {
  evolution_details: any[];
  evolves_to: Evolution[];
  is_baby: boolean;
  species: ResourceSummary;
};
