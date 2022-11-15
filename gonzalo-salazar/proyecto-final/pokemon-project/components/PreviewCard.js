import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import cardStyles from "./cardStyles";

const PreviewCard = ({ name, id, image, navigation }) => {
  const onPress = () => navigation.navigate("Info", { name, id, image });

  return (
    <TouchableHighlight onPress={onPress} underlayColor="white">
      <View style={styles.card}>
        {image ? (
          <View style={cardStyles.image}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={cardStyles.title}>{name}</Text>
          </View>
        ) : (
          <Text>No image available.</Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

export default PreviewCard;

// Styles

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 30,
    marginBottom: 15,
    padding: 30,
  },
  image: {
    alignSelf: "center",
    width: 200,
    height: 200,
  },
});
