import React, { useState, useEffect } from "react";
import AnswerInput from "./answerInput";
import MOVIES_WITH_EMOJIS from "./moviesWithEmojis";
import "./emojiGame.css";

const Counter = ({ title, number, className = "" }) => {
  return (
    <p className={"counter " + className}>
      {title}: {number}
    </p>
  );
};

const EmojiGame = () => {
  const [answer, setAnswer] = useState("");
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [currentMovie, setCurrentMovie] = useState({ name: "", emojis: "" });
  const [usedMovies, setUsedMovies] = useState([]);

  useEffect(() => {
    setRandomMovie();
  }, []);

  const resetGame = () => {
    setAnswer("");
    setLives(3);
    setPoints(0);
    setRandomMovie();
  };

  const setUserAnswer = (e) => {
    const answer = e.target.value;
    setAnswer(answer);
  };

  const submitAnswer = (e) => {
    e.preventDefault();
    if (answer !== currentMovie.name) {
      decreaseLives();
      return;
    }
    increasePoints();
    clearInput();
    setNewRandomMovie();
  };

  const decreaseLives = () => {
    if (lives === 0) {
      alert("you lost :( try again!");
      resetGame();
      return;
    }
    setLives(lives - 1);
  };

  const clearInput = () => {
    setAnswer("");
  };

  const increasePoints = () => {
    setPoints(points + 1);
  };

  const setRandomMovie = () => {
    const moviesQuantity = MOVIES_WITH_EMOJIS?.length;
    const movieIndex = Math.floor(Math.random() * moviesQuantity);
    setCurrentMovie(MOVIES_WITH_EMOJIS[movieIndex]);
    setUsedMovies([movieIndex]);
  };

  const setNewRandomMovie = () => {
    if (usedMovies.length === MOVIES_WITH_EMOJIS.length) {
      alert("you're a movie maniac");
      resetGame();
      return;
    }
    let movieIndex = 0;
    do {
      const moviesQuantity = MOVIES_WITH_EMOJIS?.length;
      movieIndex = Math.floor(Math.random() * moviesQuantity);
    } while (usedMovies.includes(movieIndex));
    setCurrentMovie(MOVIES_WITH_EMOJIS[movieIndex]);
    setUsedMovies(usedMovies.concat(movieIndex));
  };

  return (
    <section className="game-wrapper">
      <Counter className="upper-left-counter" title="Lives" number={lives} />
      <Counter className="upper-right-counter" title="Points" number={points} />
      <div className="gameContainer">
        <h1 className="game-title">Guess the movie</h1>
        <p className="emojis-container">{currentMovie.emojis}</p>
        <AnswerInput
          answer={answer}
          setAnswer={setUserAnswer}
          submitAnswer={submitAnswer}
        />
      </div>
    </section>
  );
};

export default EmojiGame;
