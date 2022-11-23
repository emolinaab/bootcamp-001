import { Text } from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import PokemonList from "../components/PokemonList";
import NoLogin from "../components/NoLogin";

export default function Favorite() {
  const [allPokemons, setAllPokemons] = useState([]);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const arrayPokemons = [];

          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            arrayPokemons.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setAllPokemons(arrayPokemons);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLogin /> : <PokemonList pokemons={allPokemons} />;
}
