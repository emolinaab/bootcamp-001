import axios from "axios";

export const getPokemon = async (search = "charmander") => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
    const data = await res.data;

    const pokemon = {
      id: data.id,
      img: data.sprites.other["official-artwork"].front_default,
      name: data.name,
      type: data.types[0]?.type.name,
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        specialAttack: data.stats[3].base_stat,
        specialDefense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      },
    };

    return pokemon;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemons = async (next = 0) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=12`
    );
    const data = await res.data;
    return dataPokemons(data.results);
  } catch (err) {
    return console.error(err);
  }
};

const dataPokemons = async (data) => {
  let list = [];
  try {
    for (const index of data) {
      const res = await axios.get(index.url);
      list = await [
        ...list,
        {
          id: res.data.id,
          name: res.data.name,
          img: res.data.sprites.front_default,
          type: res.data.types[0]?.type.name,
        },
      ];
    }
    return await list;
  } catch (err) {
    return console.error(err);
  }
};
