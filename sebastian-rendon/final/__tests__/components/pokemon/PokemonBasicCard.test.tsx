import { act, fireEvent, render } from '@testing-library/react-native';
import 'react-native';
import React from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import PokemonBasicCard, {
  PokemonBasicCardProps,
} from '../../../src/components/pokemon/PokemonBasicCard';

const props: PokemonBasicCardProps = {
  pokemonBasic: {
    name: 'pikachu',
    url: 'https://www.pokeapi.com/api/v2/pokemon/25',
  },
  onPress: () => {},
  typeColor: Colors.pokemonRed,
};

describe('when using the PokemonBasicCard component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should have a text with the pokemon id', () => {
    const view = render(<PokemonBasicCard {...props} />);
    const pokemonIdText = view.getByText('#025');

    expect(pokemonIdText).toBeDefined();
  });

  it('should have a label with the pokemon name', () => {
    const view = render(<PokemonBasicCard {...props} />);
    const pokemonNameText = view.getByText(props.pokemonBasic.name);

    expect(pokemonNameText).toBeDefined();
  });

  it('should have an image', () => {
    const view = render(<PokemonBasicCard {...props} />);
    const pokemonImage = view.getByTestId('pokemon-basic-card-img');

    expect(pokemonImage).toBeDefined();
  });

  it('should call onPress when pressed', () => {
    jest.spyOn(props, 'onPress' as never);

    const view = render(<PokemonBasicCard {...props} />);
    const basicCard = view.getByTestId('pokemon-basic-card');

    act(() => {
      fireEvent.press(basicCard);
    });

    expect(props.onPress).toHaveBeenCalledTimes(1);
  });
});
