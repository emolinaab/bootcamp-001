import { PokemonTypes } from '../types/pokemonTypes';

export const iconMap: PokemonTypes = {
  grass: 'leaf',
  water: 'water',
  fire: 'fire',
  electric: 'flash',
  psychic: 'bullseye',
  poison: 'skull',
  bug: 'ladybug',
  flying: 'feather',
  fighting: 'boxing-glove',
  normal: 'hexagon',
  rock: 'diamond',
  ground: 'circle-box',
  ghost: 'ghost',
  dark: 'brightness-2',
  steel: 'nut',
  fairy: 'butterfly',
  dragon: 'flare',
  ice: 'hexagon-multiple',
  unknown: 'help',
  shadow: 'circle-opacity',
};

export function useTypeIcon(type: string) {
  return iconMap[type];
}
