import { ResourceSummary } from './pokemon';

export type PokemonTypeName =
  | 'grass'
  | 'water'
  | 'fire'
  | 'electric'
  | 'psychic'
  | 'poison'
  | 'bug'
  | 'flying'
  | 'fighting'
  | 'normal'
  | 'rock'
  | 'ground'
  | 'ghost'
  | 'dark'
  | 'steel'
  | 'fairy'
  | 'dragon'
  | 'ice'
  | 'unknown'
  | 'shadow';

export type PokemonTypes = {
  [key: string]: string;
  grass: string;
  water: string;
  fire: string;
  electric: string;
  psychic: string;
  poison: string;
  bug: string;
  flying: string;
  fighting: string;
  normal: string;
  rock: string;
  ground: string;
  ghost: string;
  dark: string;
  steel: string;
  fairy: string;
  dragon: string;
  ice: string;
  unknown: string;
  shadow: string;
};

export type PokemonType = {
  damage_relations: PokemonDamageRelations;
  game_indices: {
    game_index: number;
    generation: ResourceSummary;
  }[];
  generation: ResourceSummary;
  id: number;
  move_damage_class: ResourceSummary;
  moves: ResourceSummary[];
  name: string;
  names: {
    language: ResourceSummary;
    name: string;
  }[];
  past_damage_relations: ResourceSummary[];
  pokemon: {
    slot: number;
    pokemon: ResourceSummary;
  }[];
};

export type PokemonDamageRelations = {
  double_damage_from: ResourceSummary[];
  double_damage_to: ResourceSummary[];
  half_damage_from: ResourceSummary[];
  half_damage_to: ResourceSummary[];
  no_damage_from: ResourceSummary[];
  no_damage_to: ResourceSummary[];
};
