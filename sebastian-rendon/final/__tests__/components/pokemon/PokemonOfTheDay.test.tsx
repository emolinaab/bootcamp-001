import 'react-native';
import React from 'react-native';
import PokemonOfTheDay, {
  PokemonOfTheDayProps,
} from '../../../src/components/pokemon/PokemonOfTheDay';
import { renderWithProviders } from '../../../src/util/test-utils';

const props: PokemonOfTheDayProps = {
  pokemon: {
    abilities: [],
    base_experience: 122,
    forms: [],
    game_indices: [],
    height: 11,
    held_items: [],
    id: 17,
    is_default: true,
    location_area_encounter: 'https://pokeapi.co/api/v2/pokemon/17/encounters',
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
    types: [
      {
        slot: 1,
        type: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
    ],
    weight: 0,
  },
};

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

describe('when using the PokemonOfTheDay component', () => {
  afterEach(() => {
    mockedNavigate.mockRestore();
  });
  it('should render a PokemonBasicInfo', () => {
    const view = renderWithProviders(<PokemonOfTheDay {...props} />);

    const basicInfo = view.getAllByTestId('pokemon-basic-info');

    expect(basicInfo).toBeDefined();
  });

  it('should render a list of PokemonTypeChip', () => {
    const view = renderWithProviders(<PokemonOfTheDay {...props} />);

    const typeChips = view.getAllByTestId('pokemon-type-chip');

    expect(typeChips.length).toBe(props.pokemon.types.length);
  });
});
