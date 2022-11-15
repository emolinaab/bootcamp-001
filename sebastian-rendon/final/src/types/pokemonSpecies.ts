import type { ResourceSummary } from './pokemon';

export type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: ResourceSummary;
  egg_groups: ResourceSummary[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: null;
  flavor_text_entries: {
    flavor_text: string;
    language: ResourceSummary;
    version: ResourceSummary;
  }[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: ResourceSummary;
  }[];
  generation: ResourceSummary;
  growth_rate: ResourceSummary;
  habitat: ResourceSummary;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: {
    language: ResourceSummary;
    name: string;
  }[];
  order: number;
  pal_park_encounters: {
    area: ResourceSummary;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: ResourceSummary;
  }[];
  shape: ResourceSummary;
  varieties: {
    is_default: boolean;
    pokemon: ResourceSummary;
  }[];
};
