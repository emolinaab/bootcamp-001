import { render } from '@testing-library/react-native';
import 'react-native';
import React from 'react-native';
import PokemonBasicInfo, {
  PokemonBasicInfoProps,
} from '../../../src/components/pokemon/PokemonBasicInfo';
import PokemonOfTheDay, {
  PokemonOfTheDayProps,
} from '../../../src/components/pokemon/PokemonOfTheDay';

describe('when using the PokemonBasicInfo component', () => {
  const props: PokemonBasicInfoProps = {
    pokemonId: undefined,
    pokemonName: '',
    pokemonUri: '',
    showBackgroundShadow: false,
    onImageLoadError: undefined,
    onPress: undefined,
  };
  it('should', () => {
    const view = render(<PokemonBasicInfo {...props} />);

    const basicInfo = view.getByTestId('pokemon-basic-info');

    expect(basicInfo).toBeDefined();
  });
});
