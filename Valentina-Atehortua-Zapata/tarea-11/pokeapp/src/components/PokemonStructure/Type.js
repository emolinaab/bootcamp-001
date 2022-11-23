import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { map, capitalize } from "lodash";
import getColorPokemonType from "../../utils/getColorPokemonType";

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.container}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorPokemonType(item.type.name),
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
