import { useEffect, useState } from "react";
import { GuessForm } from "./components/GuessForm";
import { ScoreTable } from "./components/ScoreTable";
import emojis from "./data/emojis";
import Swal from "sweetalert2";

let currentEmojis = [...emojis];

const randomMovie = () => {
  return currentEmojis[Math.floor(Math.random(5) * currentEmojis.length)];
};

const deleteTitle = (id) => {
  const index = currentEmojis.findIndex((o) => o.id === id);
  currentEmojis.splice(index, 1);
};

const App = () => {
  const [{ id, emoji, titles }, setMovieTitle] = useState(randomMovie);
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);

  const validateGuess = (guessTitle) => {
    console.log(currentEmojis);
    const flag =
      titles.filter((title) => title.toUpperCase() == guessTitle).length > 0;
    if (flag) {
      setPoints(points + 1);
      if (currentEmojis.length != 1) {
        deleteTitle(id);
        setMovieTitle(randomMovie);
      }
    } else {
      setLives(lives - 1);
    }
  };

  useEffect(() => {
    if (lives === 0) {
      Swal.fire({
        text: "You ran out of lives, try again",
        icon: "info",
        confirmButtonText: "Let's go",
      });
      setLives(3);
      setPoints(0);
      currentEmojis = [...emojis];
    }
  }, [lives]);

  useEffect(() => {
    if (points == 20) {
      Swal.fire({
        text: "Congratulations, you win",
        icon: "sucess",
        confirmButtonText: "Play again",
      });
      setLives(3);
      setPoints(0);
      currentEmojis = [...emojis];
    }
  }, [points]);

  return (
    <>
      <ScoreTable lives={lives} point={points} />
      <h1 className="title">Guess the movie: 🎬🎥</h1>
      <h1> {emoji} ​</h1>
      <GuessForm onNewGuess={validateGuess} />
    </>
  );
};

export default App;
