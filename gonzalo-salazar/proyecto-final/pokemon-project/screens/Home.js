import { useState, useEffect } from "react";
import { DevSettings } from "react-native";
import PreviewCard from "../components/PreviewCard";
import React from "react";

import {
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from "react-native";

const format = (name) => {
  if (name.includes("-")) {
    const nameArray = name.split("-");
    return `${nameArray[0]} (${nameArray.slice(1).join(" ")})`;
  }
  return name;
};

const Home = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonPreviewList, setPokemonPreviewList] = useState([]);

  const fetchPokemonDetails = async (url, tryNum = 0) => {
    if (tryNum > 5) return;

    const randomPokemonReq = await fetch(url);

    const text = await randomPokemonReq.text();
    if (text.includes("Not Found"))
      return await fetchPokemonDetails(url, tryNum + 1);

    const randomPokemon = JSON.parse(text);
    const {
      name,
      id,
      sprites: {
        other: {
          "official-artwork": { front_default: image },
        },
      },
    } = randomPokemon;

    return { name: format(name), id, image };
  };

  useEffect(() => {
    const processListForSearch = async (mainList) => {
      const pokemonList = mainList.map((pokemon) => ({
        name: format(pokemon.name),
        url: pokemon.url,
      }));

      setPokemonList(pokemonList);
    };

    const generateRandomPokemonList = async () => {
      const req = await fetch("https://pokeapi.co/api/v2/pokemon?limit=-1");
      const data = await req.json();

      processListForSearch(data.results);

      const range = data.count - 2;
      let chosenIds = [];
      let promises = [];
      for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * range);
        while (chosenIds.includes(randomNumber))
          randomNumber = Math.floor(Math.random() * range);
        chosenIds.push(randomNumber);

        promises.push(fetchPokemonDetails(data.results[randomNumber].url));
      }

      let chosenPokemon = await Promise.all(promises);

      chosenPokemon = chosenPokemon.filter((pokemon) => pokemon);
      setPokemonPreviewList(chosenPokemon);
    };

    generateRandomPokemonList();
  }, []);

  const search = async () => {
    const input = searchInput.toLowerCase().trim();
    const results = pokemonList.filter((pokemon) =>
      pokemon.name.startsWith(input)
    );
    if (!results.length) {
      setPokemonPreviewList([]);
      return;
    }

    let promises = [];
    for (let result of results) {
      promises.push(fetchPokemonDetails(result.url, 0));
    }
    let chosenPokemon = await Promise.all(promises);
    setPokemonPreviewList(chosenPokemon);
  };

  const reload = () => DevSettings.reload();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1d1c24" />
      <View style={styles.input}>
        <TextInput
          autoCorrect={false}
          onChangeText={setSearchInput}
          placeholder="Search for a Pokemon!"
          style={styles.input.text}
          value={searchInput}
        />
        <TouchableOpacity onPress={search} style={styles.Button}>
          <Text style={styles.ButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {pokemonPreviewList.length > 0 ? (
        <FlatList
          data={pokemonPreviewList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PreviewCard {...item} navigation={navigation} />
          )}
          contentContainerStyle={{
            paddingTop: 30,
            paddingBottom: 60,
          }}
        />
      ) : searchInput.length > 0 ? (
        <View style={styles.center}>
          <Text style={{ fontSize: 24 }}>
            Couldn't find a matching Pokemon!
          </Text>
        </View>
      ) : (
        <View style={styles.center}>
          <Text style={{ fontSize: 24 }}>Loading...</Text>
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        </View>
      )}
      <TouchableOpacity onPress={reload} style={styles.Button}>
        <Text style={styles.ButtonText}>See more</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

// Styles

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  input: {
    borderBottomWidth: 1,
    borderColor: "#cbd5e0",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    text: {
      fontSize: 18,
      flex: 1,
    },
  },
  Button: {
    elevation: 8,
    backgroundColor: "#ffcc01",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  ButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
