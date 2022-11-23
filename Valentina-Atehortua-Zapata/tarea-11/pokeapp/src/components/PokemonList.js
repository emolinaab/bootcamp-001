import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";

import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, goUpPokemons, isNext } = props;

  const laodMore = () => {
    goUpPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && laodMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
