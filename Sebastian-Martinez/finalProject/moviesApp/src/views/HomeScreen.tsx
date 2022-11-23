import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { HorizontalSlider } from "../components/HorizontalSlider";
import { MoviePoster } from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading, } = useMovies();

  const { width: windowWidth } = Dimensions.get("window");

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={{ marginTop: 20 }}>
        <View style={{ height: 440 }}>
          <Carousel
            layout={"stack"}
            data={nowPlaying}
            renderItem={({ item }): any => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        <HorizontalSlider title="Mejor puntuaci'on" movies={topRated} />
        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Proximamente" movies={upcoming} />

      </SafeAreaView>
    </ScrollView>
  );
};
