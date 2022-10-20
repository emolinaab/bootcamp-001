import React from "react";
import { GuessForm } from "./components/GuessForm";
import { ScoreTable } from "./components/ScoreTable";

const App = () => {
  return (
    <>
      <ScoreTable/>
      <h1 className="title">Guess the movie: 🎬🎥</h1>
      <GuessForm/>
    </>
  );
};

export default App;
