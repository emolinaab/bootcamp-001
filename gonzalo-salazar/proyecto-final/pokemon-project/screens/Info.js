import { Image, Text, StyleSheet, ScrollView, View } from "react-native";
import { useState, useEffect } from "react";
import cardStyles from "../components/cardStyles";

const Info = ({ route }) => {
  const { name, id, image } = route.params;
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    const loadInfo = async () => {
      const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = await req.json();

      setWeight(pokemon.weight);
      setHeight(pokemon.height);
      setMoves(pokemon.moves.map((i) => i.move.name));
      setTypes(pokemon.types.map((i) => i.type.name));
      setStats(
        pokemon.stats.map((i) => ({
          name: i.stat.name,
          value: i.base_stat,
        }))
      );
    };

    loadInfo();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {image ? (
          <View style={[cardStyles.image, { borderRadius: 0 }]}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ) : (
          <Text style={{ margin: 30 }}>No image available.</Text>
        )}
        <View style={{ padding: 30 }}>
          <Text style={cardStyles.title}>{name}</Text>
          <View style={styles.row}>
            <Text style={styles.text}>ID</Text>
            <Text style={styles.text}>{id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Weight</Text>
            <Text style={styles.text}>{weight ? weight : "Loading"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Height</Text>
            <Text style={styles.text}>{height ? height : "Loading"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>Types</Text>
            <Text style={[styles.text, { textTransform: "capitalize" }]}>
              {types ? types.join(", ") : "Loading"}
            </Text>
          </View>
          {stats.map((stat, key) => (
            <View key={key} style={styles.row}>
              <Text style={[styles.text, { textTransform: "capitalize" }]}>
                {`Base ${stat.name.split("-").join(" ")}`}
              </Text>
              <Text style={styles.text}>{stat.value}</Text>
            </View>
          ))}
          <View style={[styles.row, { flexDirection: "column" }]}>
            <Text style={styles.text}>Moves</Text>
            {moves.map((move, key) => (
              <Text key={key} style={styles.moves}>
                - {move.split("-").join(" ")}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Info;

// Styles

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e0",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 18,
  },
  moves: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    textTransform: "capitalize",
  },
});
