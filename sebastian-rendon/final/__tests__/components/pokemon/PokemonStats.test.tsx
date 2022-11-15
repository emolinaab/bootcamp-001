import 'react-native';
import React from 'react-native';
import { render } from '@testing-library/react-native';
import PokemonStats, {
  PokemonStatsProps,
} from '../../../src/components/pokemon/PokemonStats';

const props: PokemonStatsProps = {
  stats: [
    {
      base_stat: 35,
      effort: 0,
      stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
    },
    {
      base_stat: 55,
      effort: 0,
      stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 90,
      effort: 2,
      stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
    },
  ],
};

describe('when using the PokemonStats component', () => {
  it('should render all the pokemon stats in the list', () => {
    const view = render(<PokemonStats {...props} />);
    const pokemonStat = view.getAllByTestId('pokemon-stat');

    expect(pokemonStat.length).toBe(props.stats.length);
  });

  it('should render all the pokemon stats in the list', () => {
    const view = render(<PokemonStats {...props} />);
    const pokemonStat = view.getAllByTestId('pokemon-stat');

    expect(pokemonStat.length).toBe(props.stats.length);
  });

  it('should have the text of the stat', () => {
    const view = render(<PokemonStats {...props} />);

    const pokemonStatBase = view.getAllByTestId('pokemon-stat-base');

    for (let i = 0; i < pokemonStatBase.length; i++) {
      expect(pokemonStatBase[i].props.children).toBe(props.stats[i].base_stat);
    }
  });

  it('should have a bar the width of the stat', () => {
    const view = render(<PokemonStats {...props} />);

    const pokemonStatBar = view.getAllByTestId('pokemon-stat-bar');

    for (let i = 0; i < pokemonStatBar.length; i++) {
      expect(pokemonStatBar[i].props.style.width).toBe(
        `${Math.min(props.stats[i].base_stat, 100)}%`,
      );
    }
  });
});
