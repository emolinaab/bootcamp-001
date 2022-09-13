import React, { useState, useEffect } from "react";
import "./emojiGame.css";
import MOVIES_WITH_EMOJIS from "./moviesWithEmojis";

const GameTitle = ({ title }) => {
  return <h1 className="game-title">{title}</h1>;
};

const Counter = ({ title, number, className = "" }) => {
  return (
    <p className={"counter " + className}>
      {title}: {number}
    </p>
  );
};

const AnswerInput = ({ answer, setAnswer, tryAnswer }) => {
  return (
    <div className="answer-input-container">
      <input
        className="answer-input-field"
        type="text"
        value={answer}
        onChange={setAnswer}
      />
      <button className="answer-input-button" onClick={tryAnswer}>
        Send
      </button>
    </div>
  );
};

const EmojiGame = () => {
  const initialGameState = {
    answer: "",
    lives: 3,
    points: 0,
    currentMovie: { name: "", emojis: "" },
    usedMovies: [],
  };

  const [gameState, setGameState] = useState(initialGameState);

  const resetGame = () => {
    setGameState(initialGameState);
  };

  const setAnswer = (e) => {
    const answer = e.target.value;
    setGameState({ ...gameState, answer: answer });
  };

  const tryAnswer = () => {
    if (gameState.answer !== gameState.currentMovie.name) {
      decreaseLives();
    } else {
      setRandomMovie();
      increasePoints();
    }
  };

  const decreaseLives = () => {
    if (gameState.lives === 0) {
      resetGame();
      return;
    }
    setGameState({ ...gameState, lives: gameState.lives - 1 });
  };

  const increasePoints = () => {
    setGameState((gm) => ({ ...gm, points: gm.points + 1 }));
  };

  const setRandomMovie = () => {
    let movieIndex = 0;
    do {
      const amountOfMovies = MOVIES_WITH_EMOJIS?.length;
      movieIndex = Math.floor(Math.random() * amountOfMovies);
    } while (gameState.usedMovies.includes(movieIndex));
    setMovieByIndex(movieIndex);
  };

  const setMovieByIndex = (index) => {
    const movie = MOVIES_WITH_EMOJIS[index];
    setGameState({
      ...gameState,
      currentMovie: {
        name: movie.name,
        emojis: movie.emojis,
      },
      usedMovies: gameState.usedMovies.concat(index),
    });
  };

  useEffect(() => {
    setRandomMovie();
  }, []);

  return (
    <div className="game-wrapper">
      <Counter
        className="upper-left-counter"
        title="Lives"
        number={gameState.lives}
      />
      <Counter
        className="upper-right-counter"
        title="Points"
        number={gameState.points}
      />
      <div className="gameContainer">
        <GameTitle title="Guess the movie" />
        <p className="emojis-container">{gameState.currentMovie.emojis}</p>
        <AnswerInput
          answer={gameState.answer}
          setAnswer={setAnswer}
          tryAnswer={tryAnswer}
        />
      </div>
    </div>
  );
};

export default EmojiGame;
