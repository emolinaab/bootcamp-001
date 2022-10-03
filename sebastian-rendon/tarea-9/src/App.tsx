import { useEffect, useState } from 'react';
import baseMovies from './assets/movies';
import './App.css';
import GameStatusModal from './components/GameStatusModal';

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
      <section className="info-counter">
        <div className="info-counter__lives">
          <h2>Lives</h2>
          <big>{lives}</big>
        </div>
        <div className="info-counter__points">
          <h2>Points</h2>
          <big>
            {points}/{movies.length}
          </big>
        </div>
      </section>
      <h1 className="game-title">Guess the movie or show</h1>
      <section className="game-content">
        <span className="game-content__emoji">
          {movies[currentMovieIndex].emojis.join('')}
        </span>
        <form
          className="game-form"
          onSubmit={(e) => {
            e.preventDefault();
            guessMovie();
          }}
        >
          <input
            type="text"
            className="game-form__input"
            placeholder="Enter your guess"
            value={guessedName}
            onChange={(e) => {
              setGuessedName(e.target.value.toUpperCase());
            }}
          />
          <button type="submit" className="game-form__button">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
