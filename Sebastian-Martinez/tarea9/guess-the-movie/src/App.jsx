import { useState } from "react";
import styled from "styled-components";

import GameOver from "./components/GameOver/GameOver";
import InputMovie from "./components/InputMovie/InputMovie";
import Navbar from "./components/Navbar/Navbar.jsx";
import { DATA } from "./data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 80px;
`;

function App() {
  const [item, setItem] = useState(0);
  const [movie, setMovie] = useState("");
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * DATA.length);
    setItem(randomIndex);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setMovie(value);
  };

  const validateMovie = () => {
    if (DATA[item].nameMovie === movie) {
      setMovie("");
      handleClick();
      setPoints(points + 1);
    } else {
      setLives(lives - 1);
      handleClick();
      setMovie("");
    }
  };

  const startAgain = () => {
    setLives(3)
    setPoints(0)
  }

  return (
    <div>
      {lives === 0 ? (
        <GameOver onClick={startAgain}/>
      ) : (
        <Container>
          <Navbar lives={lives} points={points} />
          <h1>GUESS THE MOVIE</h1>
          <Text>{DATA[item].emojisMovie} </Text>
          <InputMovie
            onChange={handleChange}
            onClick={validateMovie}
            value={movie}
          />
        </Container>
      )}
    </div>
  );
}

export default App;
