import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Movie } from "../interfaces/movieInterface";


interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation()

  return (
    <View style={{ width, height, marginHorizontal: 8 }} >
      <TouchableOpacity activeOpacity={0.8} style={styles.imageContainer} onPress={() => navigation.navigate('DetailScreen', movie)}>
        <Image style={styles.image} source={{ uri: uri }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    shadowColor: "#000",
    borderRadius: 18,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 3,
    shadowRadius: 4.65,

    elevation: 10,
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
