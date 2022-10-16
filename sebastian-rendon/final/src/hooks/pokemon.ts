import type { Pokemon } from '../types/pokemon';
import { getPokemonImageSet } from '../util/pokemon';

export function usePokemonIdFromUrl(url: string) {
  const urlSplit = url.split('/');
  if (!url || !urlSplit.length) return 0;
  if (url.endsWith('/')) {
    const id = Number.parseInt(urlSplit[urlSplit.length - 2], 10);
    return Number.isNaN(id) ? 0 : id;
  }

  const id = Number.parseInt(urlSplit[urlSplit.length - 1], 10);
  return Number.isNaN(id) ? 0 : id;
}

export function usePokemonImageSet(id: number) {
  return getPokemonImageSet(id);
}

export function usePokemonImageFromObject(pokemon: Pokemon | undefined) {
  if (pokemon) {
    return (
      pokemon.sprites?.other['official-artwork']?.front_default ||
      pokemon.sprites?.front_default
    );
  }

  return;
}
