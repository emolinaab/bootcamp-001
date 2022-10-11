import {getColorByType, getPokemons} from '~utils';

test('getColorByType returns white by default', () => {
  expect(getColorByType('notAType')).toBe('#fff');
});

test('getPokemons returns null if no url is provided', async () => {
  expect(await getPokemons()).toBe(null);
});
