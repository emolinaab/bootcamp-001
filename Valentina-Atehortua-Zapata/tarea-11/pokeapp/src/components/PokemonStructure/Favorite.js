import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Favorite(props) {
  const { id } = props;
  const addFavorite = () => {
    console.log("Añadir favoritos", id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
