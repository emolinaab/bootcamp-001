import 'react-native';
import React from 'react';
import PokemonTypeChip, {
  PokemonTypeChipProps,
} from '../../../src/components/pokemon/PokemonTypeChip';
import { act, fireEvent } from '@testing-library/react-native';
import { renderWithProviders } from '../../../src/util/test-utils';
import { PokemonTypeColors } from '../../../src/theme/colors';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('when using the PokemonTypeChip component', () => {
  afterEach(() => {
    mockedNavigate.mockRestore();
    jest.restoreAllMocks();
  });

  it('should render properly', () => {
    const pokemonTypeChipProps: PokemonTypeChipProps = {
      type: 'grass',
      hideText: false,
      onPress: undefined,
    };

    const view = renderWithProviders(
      <PokemonTypeChip {...pokemonTypeChipProps} />,
    );

    const chip = view.getByTestId('pokemon-type-chip');

    expect(chip).toBeDefined();
  });

  it('should call onPress if defined when the chip is pressed', () => {
    const pokemonTypeChipProps: PokemonTypeChipProps = {
      type: 'grass',
      hideText: false,
      onPress: () => {},
    };

    jest.spyOn(pokemonTypeChipProps, 'onPress' as never);

    const view = renderWithProviders(
      <PokemonTypeChip {...pokemonTypeChipProps} />,
    );

    const chip = view.getByTestId('pokemon-type-chip');

    act(() => {
      fireEvent.press(chip);
    });

    expect(pokemonTypeChipProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('should be a color based on its type', () => {
    for (const type in PokemonTypeColors) {
      const props: PokemonTypeChipProps = {
        type,
        hideText: false,
        onPress: undefined,
      };

      const view = renderWithProviders(<PokemonTypeChip {...props} />);
      const chip = view.getByTestId('pokemon-type-chip');

      expect(chip.props.style.backgroundColor).toEqual(PokemonTypeColors[type]);

      view.unmount();
    }
  });

  it('should have a text with the type as its value', () => {
    const props: PokemonTypeChipProps = {
      type: 'shadow',
      hideText: false,
      onPress: undefined,
    };

    const view = renderWithProviders(<PokemonTypeChip {...props} />);
    const chipText = view.getByText('shadow');

    expect(chipText).toBeDefined();
  });

  it('should not have text if hideText prop is true', () => {
    const props: PokemonTypeChipProps = {
      type: 'shadow',
      hideText: true,
      onPress: undefined,
    };

    const view = renderWithProviders(<PokemonTypeChip {...props} />);
    const chipText = view.queryByTestId('pokemon-type-chip-text');

    expect(chipText).toBe(null);
  });

  it('should have an icon', () => {
    const props: PokemonTypeChipProps = {
      type: 'shadow',
      hideText: false,
      onPress: undefined,
    };

    const view = renderWithProviders(<PokemonTypeChip {...props} />);
    const chipIcon = view.getByTestId('pokemon-type-chip-icon');
    expect(chipIcon.props).toBeDefined();
  });
});
