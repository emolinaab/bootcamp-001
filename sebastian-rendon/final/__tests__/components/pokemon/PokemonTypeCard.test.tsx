import 'react-native';
import React from 'react';
import PokemonTypeCard, {
  PokemonTypeCardProps,
} from '../../../src/components/pokemon/PokemonTypeCard';
import { act, fireEvent, render } from '@testing-library/react-native';
import { Colors, PokemonTypeColors } from '../../../src/theme/colors';
import { iconMap } from '../../../src/hooks/icons';

const props: PokemonTypeCardProps = {
  type: 'grass',
  onPress: () => {},
};

describe('when using the PokemonTypeCard', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should have text with the type value', () => {
    const view = render(<PokemonTypeCard {...props} />);

    const cardText = view.getByText(props.type);

    expect(cardText).toBeDefined();
  });

  it('should have a background color based on its type', () => {
    for (const type in PokemonTypeColors) {
      const view = render(<PokemonTypeCard type={type} />);

      const cardView = view.getByTestId('pokemon-type-card-view');

      expect(cardView.props.style.backgroundColor).toBe(
        PokemonTypeColors[type],
      );

      view.unmount();
    }
  });

  it('should have a default background color if type is invalid', () => {
    const invalidType = 'invalidType';

    const view = render(<PokemonTypeCard type={invalidType} />);

    const cardView = view.getByTestId('pokemon-type-card-view');

    expect(cardView.props.style.backgroundColor).toBe(Colors.pokemonRed);
  });

  it('should have an icon based on its type', () => {
    for (const type in iconMap) {
      const view = render(<PokemonTypeCard type={type} />);
      const icon = view.getByTestId('pokemon-type-card-icon');

      expect(icon.props.accessibilityLabel).toBe(iconMap[type]);

      view.unmount();
    }
  });

  it('should not have an icon if type is invalid', () => {
    const invalidType = 'invalidType';

    const view = render(<PokemonTypeCard type={invalidType} />);

    const icon = view.queryByTestId('pokemon-type-card-icon');

    expect(icon).toBe(null);
  });

  it('should call onPress when the card is pressed', () => {
    jest.spyOn(props, 'onPress' as never);

    const view = render(<PokemonTypeCard {...props} />);

    const card = view.getByTestId('pokemon-type-card');

    act(() => {
      fireEvent.press(card);
    });

    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
