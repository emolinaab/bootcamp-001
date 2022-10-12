import {getColorByType, getPokemons, getPokemonData} from '~utils';
import rawPokemonData from './rawPokemonData.json';

test('getColorByType returns white by default', () => {
  expect(getColorByType('notAType')).toBe('#fff');
});

test('getColorByType returns a different color from white for valid tipes', () => {
  expect(getColorByType('fire')).not.toBe('#fff');
});

test('getPokemons returns null if no url is provided', async () => {
  expect(await getPokemons()).toBe(null);
});

test('getPokemonData returns the requuired data', () => {
  const pokemonData = getPokemonData(rawPokemonData);
  expect(pokemonData).toHaveProperty('name');
  expect(pokemonData).toHaveProperty('types');
  expect(pokemonData).toHaveProperty('id');
  expect(pokemonData).toHaveProperty('sprites');
  expect(pokemonData).toHaveProperty('imageUrl');
  expect(pokemonData).toHaveProperty('weight');
  expect(pokemonData).toHaveProperty('moves');
});
