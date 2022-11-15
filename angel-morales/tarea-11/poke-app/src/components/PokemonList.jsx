import React, { useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counter/counterSlice";
import { CardPokemon } from "./CardPokemon";
import { getPokemons } from "../../api/pokeapi";
import { setPokemons } from "../features/pokemon/pokemonsSlice";

const PokemonList = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const loading = async (num) => {
    const res = await getPokemons(num);
    await dispatch(setPokemons(res));
  };

  const handleNext = () => dispatch(increment());

  useEffect(() => {
    loading(value);
  }, [value, dispatch]);

  const list = useSelector((state) => state.pokemons);
  const renderItem = ({ item }) => <CardPokemon data={item} />;

  return (
    <View>
      <FlatList
        data={list.pokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.1}
        onEndReached={handleNext}
      />
    </View>
  );
};

export default PokemonList;
