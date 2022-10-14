import { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { addFavorite, isFavorite, removeFavorite } from "../utils/favorites";

const AddRemoveFavoriteButton = () => {
  const [favorite, setFavorite] = useState(false);
  const route = useRoute();

  useEffect(() => {
    const {
      params: { id },
    } = route;

    isFavorite(id).then((favorite) => {
      favorite && setFavorite(true);
    });
  }, []);

  const toggleFavorite = () => {
    const {
      params: { id },
    } = route;

    if (favorite) {
      removeFavorite(id);
      setFavorite(false);
    } else {
      addFavorite(id);
      setFavorite(true);
    }
  };

  return (
    <TouchableOpacity onPress={toggleFavorite} style={style.container}>
      <Text style={style.text}>{favorite ? "Remove" : "Add"}</Text>
    </TouchableOpacity>
  );
};

export default AddRemoveFavoriteButton;

// Styles

const style = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  text: {
    color: "#ffcc01",
    fontSize: 17,
    letterSpacing: 0.35,
    fontWeight: "bold",
  },
});
