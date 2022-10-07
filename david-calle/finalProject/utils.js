import axios from 'axios';

export const POKEMON_API_URL = 'https://pokeapi.co/api/v2';

export const getPokemonData = pokeData => {
  const {
    front_default,
    front_shiny,
    front_female,
    front_shiny_female,
    back_default,
    back_shiny,
    back_female,
    back_shiny_female,
  } = pokeData.sprites;

  return {
    name: pokeData.name,
    id: pokeData.id,
    imageUrl: pokeData.sprites.other['official-artwork']?.front_default ?? '',
    types: pokeData.types.map(type => type.type.name),
    weight: pokeData.weight,
    moves: pokeData.moves.slice(0, 4).map(move => move.move.name),
    sprites: [
      front_default,
      front_shiny,
      front_female,
      front_shiny_female,
      back_default,
      back_shiny,
      back_female,
      back_shiny_female,
    ].filter(el => el != null),
  };
};

export const getPokemons = async (url = null) => {
  if (!url) {
    return null;
  }
  return axios
    .get(url)
    .then(res => ({
      next: res.data.next,
      prev: res.data.previous,
      results: res.data.results,
    }))
    .then(async data => {
      data.results = await Promise.all(
        data.results.map(result => axios.get(result.url)),
      );
      return data;
    })
    .then(data => {
      data.results = data.results.map(pokeData =>
        getPokemonData(pokeData.data),
      );
      return data;
    })
    .catch(() => {
      throw new Error('Pokemon Not Found');
    });
};

export const searchPokemon = async pokemonName => {
  pokemonName = pokemonName.toLowerCase();
  axios
    .get(`${POKEMON_API_URL}/pokemon/${pokemonName}`)
    .then(res => getPokemonData(res.data));
};

export const getColorByType = type => {
  const colors = {
    normal: '#d3d3d3',
    fighting: '#a18f62',
    flying: '#bff1f2',
    poison: '#ab8adb',
    ground: '#aba67d',
    rock: '#a69a8a',
    bug: '#a1db6e',
    ghost: '#a979c9',
    steel: '#ada7a6',
    fire: '#e8867d',
    water: '#78a1e3',
    grass: '#9fe396',
    electric: '#e0e675',
    psychic: '#fab9f6',
    ice: '#82c7d1',
    dragon: '#676ea6',
    dark: '#53545e',
    fairy: '#f7d7f4',
    unknown: '#dbaf8f',
    shadow: '#969493',
  };

  return colors[type];
};

export const capitalize = name => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
