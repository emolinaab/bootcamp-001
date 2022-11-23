import { Cast } from "../interfaces/creditsInterface";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
  actor: Cast;
}

export const ActorItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.cardStyle}>
      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }}
        />
      )}

      <View>
        <Text style={styles.nameStyle}>{actor.name} </Text>
        <Text>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cardStyle: {
        borderColor: 'black',
        flexDirection: "row",
        marginRight: 15,
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        paddingRight: 10,
    },
    nameStyle : {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
