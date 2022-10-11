import {getColorByType} from '~utils';

test('getColorByType returns white by default', () => {
  expect(getColorByType('notAType')).toBe('#fff');
});
