import { PokemonClient } from "pokenode-ts";
import { Colors } from "../colors";
import Pokemon, { Stats } from '../models/Pokemon';
import { setPokemon } from "./pokemons/pokemonSlice";

export const getPokemon = async (counter: number, dispatch: any) => {
    const api = new PokemonClient();
    await api
        .getPokemonById(counter)
        .then(pokemon => {
            const currentPokemonStats: Stats = {
                hp: pokemon.stats[0].base_stat,
                attack: pokemon.stats[1].base_stat,
                defense: pokemon.stats[2].base_stat,
                specialAttack: pokemon.stats[3].base_stat,
                specialDefense: pokemon.stats[4].base_stat,
                speed: pokemon.stats[5].base_stat,
            };
            const newPokemon: Pokemon = {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon?.sprites?.front_default?.toString(),
                height: pokemon.height,
                weight: pokemon.weight,
                type: pokemon?.types[0]?.type?.name?.toString(),
                move: pokemon?.moves[0]?.move?.name?.toString(),
                stats: currentPokemonStats,
                color:
                    pokemon?.types[0]?.type?.name?.toString() === 'grass'
                        ? Colors.grass
                        : pokemon?.types[0]?.type?.name?.toString() === 'fire'
                            ? Colors.fire
                            : pokemon?.types[0]?.type?.name?.toString() === 'water'
                                ? Colors.water
                                : pokemon?.types[0]?.type?.name?.toString() === 'electric'
                                    ? Colors.electric
                                    : pokemon?.types[0]?.type?.name?.toString() === 'ice'
                                        ? Colors.ice
                                        : pokemon?.types[0]?.type?.name?.toString() === 'fighting'
                                            ? Colors.fighting
                                            : pokemon?.types[0]?.type?.name?.toString() === 'poison'
                                                ? Colors.poison
                                                : pokemon?.types[0]?.type?.name?.toString() === 'ground'
                                                    ? Colors.ground
                                                    : pokemon?.types[0]?.type?.name?.toString() === 'flying'
                                                        ? Colors.flying
                                                        : pokemon?.types[0]?.type?.name?.toString() === 'psychic'
                                                            ? Colors.psychic
                                                            : pokemon?.types[0]?.type?.name?.toString() === 'bug'
                                                                ? Colors.bug
                                                                : pokemon?.types[0]?.type?.name?.toString() === 'rock'
                                                                    ? Colors.rock
                                                                    : pokemon?.types[0]?.type?.name?.toString() === 'ghost'
                                                                        ? Colors.ghost
                                                                        : pokemon?.types[0]?.type?.name?.toString() === 'dragon'
                                                                            ? Colors.dragon
                                                                            : pokemon?.types[0]?.type?.name?.toString() === 'dark'
                                                                                ? Colors.dark
                                                                                : pokemon?.types[0]?.type?.name?.toString() === 'steel'
                                                                                    ? Colors.steel
                                                                                    : pokemon?.types[0]?.type?.name?.toString() === 'fairy'
                                                                                        ? Colors.fairy
                                                                                        : pokemon?.types[0]?.type?.name?.toString() === 'normal'
                                                                                            ? Colors.normal
                                                                                            : Colors.black,
            };
            dispatch(setPokemon(newPokemon));
        })
        .catch(err => {
            console.log(err);
        });
};