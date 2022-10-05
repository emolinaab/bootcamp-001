import axios from 'axios';

const POKEMON_API_URL = 'https://pokeapi.co/api/v2';

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
  url = url || `${POKEMON_API_URL}/pokemon/?limit=4`;
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
