import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBMoviesReponse } from "../interfaces/movieInterface";

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingMovies = movieDB.get<MovieDBMoviesReponse>("/now_playing");
    const topratedMovies = movieDB.get<MovieDBMoviesReponse>("/top_rated");
    const popularMovies = movieDB.get<MovieDBMoviesReponse>("/popular");
    const upcomingMovies = movieDB.get<MovieDBMoviesReponse>("/upcoming");

    const resp = await Promise.all([
      nowPlayingMovies,
      popularMovies,
      topratedMovies,
      upcomingMovies,
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { ...moviesState, isLoading };
};
