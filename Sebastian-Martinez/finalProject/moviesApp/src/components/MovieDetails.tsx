import { Text, View, StyleSheet } from "react-native";
import { Cast } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterface";
import currencyFormatter from "currency-formatter";
import { ActorItem } from "./ActorItem";
import { FlatList } from "react-native-gesture-handler";
interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
      <Text>Score: </Text>
      <Text>{movieFull.vote_average}</Text>
      </View>
      
      <Text>{movieFull.genres.map((g) => g.name).join(", ")} </Text>

      <View>
        <Text style={styles.titleStyle}>Historia </Text>
        <Text>{movieFull.overview} </Text>
      </View>

      <Text style={styles.titleStyle}>Actores</Text>
      <FlatList
        style={{ marginTop: 10, height: 50, marginBottom: 10 }}
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActorItem actor={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.titleStyle}>Presupuesto</Text>
      <Text>
        {currencyFormatter.format(movieFull.budget, { code: "USD" })}{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  
});
