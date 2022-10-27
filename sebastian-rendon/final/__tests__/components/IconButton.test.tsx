import 'react-native';
import React from 'react';
import IconButton, { IconButtonProps } from '../../src/components/IconButton';
import { act, fireEvent, render } from '@testing-library/react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, PokemonTypeColors } from '../../src/theme/colors';

const props: IconButtonProps = {
  icon: <Icon name="pokeball" />,
  onPress: () => {},
  variant: '',
  accessibilityLabel: 'Pokeball',
};

describe('when using the IconButton component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should have the icon as its child', () => {
    const view = render(<IconButton {...props} />);
    const iconButton = view.getByTestId('icon-button');

    expect(iconButton.props.children[0].props.name).toBe('pokeball');
  });

  it('should call onPress when pressed', () => {
    jest.spyOn(props, 'onPress' as never);
    const view = render(<IconButton {...props} />);
    const iconButton = view.getByTestId('icon-button');

    act(() => {
      fireEvent.press(iconButton);
    });

    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('should have a default color', () => {
    const view = render(<IconButton {...props} />);
    const iconButton = view.getByTestId('icon-button');

    expect(iconButton.props.style.backgroundColor).toBe(Colors.pokemonRed);
  });

  it('should have a color based on its variant', () => {
    const view = render(<IconButton {...{ ...props, variant: 'grass' }} />);
    const iconButton = view.getByTestId('icon-button');

    expect(iconButton.props.style.backgroundColor).toBe(
      PokemonTypeColors.grass,
    );
  });
});
