import "./App.css";
import React, { useState } from "react";
import Header from './components/headerComponent';
import Game from './components/gameComponent';

function App() {
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);
  const [movie, setMovie] = useState('Presiona reiniciar para empezar');
  return (
    <div className="App">
      <Header lives={lives} setLives={setLives} points={points} setPoints={setPoints}></Header>
      <Game lives={lives} setLives={setLives} points={points} setPoints={setPoints} movie={movie} setMovie={setMovie}></Game>
    </div>
  );
}

export default App;
