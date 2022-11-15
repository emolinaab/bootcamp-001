import { iconMap, useTypeIcon } from '../../src/hooks/icons';

describe('when using the icons hooks', () => {
  describe('when using useTypeIcon', () => {
    it('should return an icon name for every type', () => {
      const types = Object.keys(iconMap);

      for (const type of types) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        expect(useTypeIcon(type)).toBe(iconMap[type]);
      }
    });

    it('should return undefined if the argument passed is not a valid type', () => {
      expect(useTypeIcon('mystic')).toBe(undefined);
    });
  });
});
