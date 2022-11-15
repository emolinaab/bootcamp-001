import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "favorites";

export async function getFavorites() {
  let favorites = await AsyncStorage.getItem(FAVORITES_KEY);

  if (!favorites) favorites = [];
  else favorites = JSON.parse(favorites);

  return favorites;
}

export async function addFavorite(favoriteID) {
  let favorites = await getFavorites();

  if (!favorites.includes(favoriteID)) {
    favorites.push(favoriteID);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export async function removeFavorite(favoriteID) {
  let favorites = await getFavorites();
  favorites = favorites.filter((id) => id !== favoriteID);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export async function isFavorite(favoriteID) {
  let favorites = await getFavorites();
  return favorites.includes(favoriteID);
}
