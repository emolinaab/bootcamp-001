export default {
  name: 'bulbasaur',
  id: 1,
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  types: ['grass', 'poison'],
  weight: 69,
  moves: ['razor-wind', 'swords-dance', 'cut', 'bind'],
  sprites: [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
  ],
};

export const multiplePokemonData = [
  {
    name: 'bulbasaur',
    id: 1,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: ['grass', 'poison'],
    weight: 69,
    moves: ['razor-wind', 'swords-dance', 'cut', 'bind'],
    sprites: [
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    ],
  },
  {
    name: 'bulbasaur',
    id: 1,
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: ['grass', 'poison'],
    weight: 69,
    moves: ['razor-wind', 'swords-dance', 'cut', 'bind'],
    sprites: [
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    ],
  },
];

export const generalQueueResult = {
  data: {
    count: 1154,
    next: 'https://pokeapi.co/api/v2/pokemon/?offset=2&limit=2',
    previous: null,
    results: [
      {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
      {name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
    ],
  },
};
