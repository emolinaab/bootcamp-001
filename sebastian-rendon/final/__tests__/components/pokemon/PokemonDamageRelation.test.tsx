import 'react-native';
import React from 'react-native';
import PokemonDamageRelation, {
  PokemonDamageRelationProps,
} from '../../../src/components/pokemon/PokemonDamageRelation';
import { renderWithProviders } from '../../../src/util/test-utils';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: mockedNavigate }),
}));

const props: PokemonDamageRelationProps = {
  label: 'Strong against',
  damageRelation: [
    { name: 'grass', url: '' },
    { name: 'fighting', url: '' },
  ],
};

describe('when using the PokemonBasicCard component', () => {
  afterEach(() => {
    mockedNavigate.mockRestore();
  });

  it('should have a label', () => {
    const view = renderWithProviders(<PokemonDamageRelation {...props} />);
    const label = view.getByText(props.label);

    expect(label).toBeDefined();
  });

  it('should have a list of PokemonTypeChips', () => {
    const view = renderWithProviders(<PokemonDamageRelation {...props} />);
    const chips = view.getAllByTestId('pokemon-type-chip');

    expect(chips.length).toBe(props.damageRelation.length);
  });
});
