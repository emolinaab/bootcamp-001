import { act, fireEvent, render } from '@testing-library/react-native';
import 'react-native';
import React from 'react-native';
import PokemonBasicInfo, {
  PokemonBasicInfoProps,
} from '../../../src/components/pokemon/PokemonBasicInfo';

describe('when using the PokemonBasicInfo component', () => {
  const props: PokemonBasicInfoProps = {
    pokemonId: 25,
    pokemonName: 'Pikachu',
    pokemonUri:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    showBackgroundShadow: false,
    onPress: () => {},
    onImageLoadError: () => {},
  };

  it('should have text with id if pokemonId is defined', () => {
    const view = render(<PokemonBasicInfo {...props} />);
    const pokemonId = view.getByText(
      `${props.pokemonName} #${props.pokemonId?.toString().padStart(3, '0')}`,
    );

    expect(pokemonId).toBeDefined();
  });

  it('should have text without id if pokemonId is undefined', () => {
    const view = render(
      <PokemonBasicInfo {...{ ...props, pokemonId: undefined }} />,
    );
    const pokemonId = view.queryByText(props.pokemonName);

    expect(pokemonId).toBeDefined();
  });

  it('should call onPress when the component is pressed', () => {
    jest.spyOn(props, 'onPress' as never);

    const view = render(<PokemonBasicInfo {...props} />);
    const touchable = view.getByTestId('pokemon-basic-info-touchable');

    act(() => {
      fireEvent.press(touchable);
    });

    expect(props.onPress).toHaveBeenCalledTimes(1);
  });

  it('should not show a background shadow if showBackgroundShadow is false', () => {
    const view = render(<PokemonBasicInfo {...props} />);
    const touchable = view.getByTestId('pokemon-basic-info-touchable');

    expect(touchable.props.style.backgroundColor).toBeUndefined();
  });

  it('should not show a background shadow if showBackgroundShadow is false', () => {
    const view = render(
      <PokemonBasicInfo {...{ ...props, showBackgroundShadow: true }} />,
    );
    const touchable = view.getByTestId('pokemon-basic-info-touchable');

    expect(touchable.props.style.backgroundColor).toBe('rgba(100,100,100,0.2)');
  });
});
