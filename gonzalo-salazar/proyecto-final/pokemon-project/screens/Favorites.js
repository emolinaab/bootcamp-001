import { useState, useEffect } from "react";
import PreviewCard from "../components/PreviewCard";
import { getFavorites } from "../utils/favorites";

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Favorites = ({ navigation }) => {
  const [favoritesList, setFavoritesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      const getFavoritesAndInfo = async () => {
        const favoritesByID = await getFavorites();

        let favorites = [];
        for (let i = 0; i < favoritesByID.length; i++) {
          const req = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${favoritesByID[i]}`
          );
          const data = await req.json();

          let pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites.other["official-artwork"].front_default,
          };
          favorites.push(pokemon);
        }

        setFavoritesList(favorites);
        setLoading(false);
      };

      getFavoritesAndInfo();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>
      {!loading ? (
        favoritesList.length > 0 ? (
          <FlatList
            data={favoritesList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PreviewCard {...item} navigation={navigation} />
            )}
            contentContainerStyle={{
              paddingTop: 30,
              paddingBottom: 60,
            }}
          />
        ) : (
          <View style={styles.containers}>
            <Text style={styles.text}>You have no favorites!</Text>
          </View>
        )
      ) : (
        <View style={styles.containers}>
          <Text style={styles.text}>Loading...</Text>
          <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        </View>
      )}
    </View>
  );
};

export default Favorites;

// Styles

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: "white", flex: 1 },
  containers: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
