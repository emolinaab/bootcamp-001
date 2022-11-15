import {
  usePokemonIdFromUrl,
  usePokemonImageFromObject,
  usePokemonImageSet,
} from '../../src/hooks/pokemon';
import { Pokemon } from '../../src/types/pokemon';

describe('when using pokemon hooks', () => {
  describe('when using usePokemonIdFromUrl', () => {
    it('should return an id from its url', () => {
      const mockId = 25;
      const mockUrl = `https://pokeapi.co/api/v2/pokemon/${mockId}/`;

      expect(usePokemonIdFromUrl(mockUrl)).toBe(mockId);
    });

    it('should return 0 if the url is empty', () => {
      const mockUrl = '';

      expect(usePokemonIdFromUrl(mockUrl)).toBe(0);
    });

    it('should return 0 if the url is invalid', () => {
      const mockUrl = 'https://pokeapi.co/api/v2/pokemon/id/';

      expect(usePokemonIdFromUrl(mockUrl)).toBe(0);
    });
  });

  describe('when using the usePokemonImageFromObject', () => {
    const pokemon: Pokemon = {
      abilities: [],
      base_experience: 122,
      forms: [],
      game_indices: [],
      height: 11,
      held_items: [],
      id: 17,
      is_default: true,
      location_area_encounter:
        'https://pokeapi.co/api/v2/pokemon/17/encounters',
      moves: [],
      name: 'pidgeotto',
      order: 22,
      past_types: [],
      species: [],
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
        other: {
          'official-artwork': {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
          },
        },
      },
      stats: [],
      types: [],
      weight: 0,
    };

    it('should return the official artwork if its defined', () => {
      pokemon.sprites.other['official-artwork'] = {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
      };

      expect(usePokemonImageFromObject(pokemon)).toBe(
        pokemon.sprites.other['official-artwork']?.front_default,
      );
    });

    it('should return the front_default url if official artwork is not defined', () => {
      pokemon.sprites.other['official-artwork'] = undefined;

      expect(usePokemonImageFromObject(pokemon)).toBe(
        pokemon.sprites.front_default,
      );
    });

    it('should return undefined if pokemon is undefined', () => {
      expect(usePokemonImageFromObject(undefined)).toBeUndefined();
    });
  });

  describe('when using the usePokemonImageSet', () => {
    it('should return an array with 2 urls', () => {
      expect(usePokemonImageSet(1)?.length).toBe(2);
    });

    it('should return undefined if id is 0', () => {
      expect(usePokemonImageSet(0)).toBeUndefined();
    });
  });
});
