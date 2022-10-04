import { useEffect, useState } from 'react';
import baseMovies from './assets/movies';
import './App.css';
import GameStatusModal from './components/GameStatusModal';
import GameForm from './components/GameForm';
import GameScore from './components/GameScore';
import GameGuessedList from './components/GameGuessedList';

type GameStatus = 'IN_PROGRESS' | 'LOST' | 'WON';

const STARTING_LIVES = 3;

function App() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [movies, setMovies] = useState(baseMovies);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [guessedName, setGuessedName] = useState('');
  const [gameStatus, setGameStatus] = useState<GameStatus>('IN_PROGRESS');

  useEffect(() => {
    pickNewMovie();
  }, []);

  useEffect(() => {
    if (movies.every((movie) => movie.guessed)) return setGameStatus('WON');
    if (lives === 0) return setGameStatus('LOST');
    return setGameStatus('IN_PROGRESS');
  }, [points, lives]);

  const guessMovie = () => {
    if (gameStatus === 'IN_PROGRESS' && guessedName) {
      if (
        movies[currentMovieIndex].name.toUpperCase() === guessedName ||
        movies[currentMovieIndex].otherNames
          ?.map((name) => name.toUpperCase())
          .includes(guessedName)
      ) {
        const newMovies = [...movies];
        newMovies[currentMovieIndex].guessed = true;

        setGuessedName('');
        setPoints(points + 1);
        setMovies(newMovies);
        pickNewMovie();
        return true;
      }

      setLives(lives - 1);
      return false;
    }

    return false;
  };

  const restartGame = () => {
    setMovies(movies.map((movie) => ({ ...movie, guessed: false })));
    setLives(STARTING_LIVES);
    setPoints(0);
    setGuessedName('');
    pickNewMovie();
  };

  const pickNewMovie = () => {
    if (movies.every((movie) => movie.guessed)) return;
    let randomIndex = Math.floor(Math.random() * movies.length);
    while (movies[randomIndex].guessed) {
      randomIndex = Math.floor(Math.random() * movies.length);
    }
    setCurrentMovieIndex(randomIndex);
  };

  return (
    <div className="app" data-testid="app">
      <GameStatusModal status={gameStatus} onRestart={restartGame} />
      <GameScore lives={lives} points={points} totalPoints={movies.length} />
      <h1 className="game-title">Guess the movie or show</h1>
      <GameForm
        riddle={movies[currentMovieIndex].emojis.join('')}
        guess={guessedName}
        onInputChange={setGuessedName}
        onSubmit={guessMovie}
      />
      <GameGuessedList items={movies.filter((movie) => movie.guessed)} />
    </div>
  );
}

export default App;
