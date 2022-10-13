import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import {
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Movie } from "../interfaces/movieInterface";
import { RootStackParams } from "../navigation/Navigation";

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

const screenHeight = Dimensions.get("screen").height;

const DetailScreen = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <SafeAreaView style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.posterImage} />
      </SafeAreaView>
      <View style={styles.textContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  posterImage: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.8,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: "hidden",
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 18,
    color: 'gray',
    opacity: 0.8
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});

export default DetailScreen;
