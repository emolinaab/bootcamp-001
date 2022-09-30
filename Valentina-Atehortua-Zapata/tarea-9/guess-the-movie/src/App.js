import "./App.css";
import { MOVIES } from "./data";
import { useState } from "react";
import swal from "sweetalert";

function App() {
  const [movie, setMovie] = useState("");
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [live, setLive] = useState(3);

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setMovie(value);
  };

  function numberRandom() {
    const number = Math.floor(Math.random() * MOVIES.length);
    setIndex(number);
  }

  const validateMovie = (e) => {
    if (MOVIES[index].nameMovie.toLowerCase() === movie.toLowerCase()) {
      swal({
        title: "Correct",
        text: "The name of the movie is correct",
        icon: "success",
        timer: "1000",
        buttons: false,
      });
      numberRandom();
      setLive(3);
      setPoints(points + 3);
    } else if (live === 1) {
      gameOver();
    } else {
      swal({
        title: "Wrong",
        text: "The name of the movie is wrong",
        icon: "error",
        timer: "1000",
        buttons: false,
      });
      setLive(live - 1);
      setPoints(0);
    }
    clear();
  };

  function clear() {
    setMovie("");
  }

  function gameOver() {
    setLive(0);
    setPoints(0);
    swal({
      title: "Game Over",
      text: "Sorry, you lost the game",
      icon: "warning",
      timer: "1000",
      buttons: false,
    });
    let btnCheck = document.getElementById("btnCheck");
    btnCheck.disabled = "false";
    let input = document.getElementById("input");
    input.disabled = "false";
  }

  function startAgain() {
    setLive(3);
    let btnCheck = document.getElementById("btnCheck");
    btnCheck.disabled = !btnCheck.disabled;
    let input = document.getElementById("input");
    input.disabled = !input.disabled;
  }

  return (
    <div>
      <div className="container">
        <h3>Guess The Movie</h3>
        <div className="subContainer">
          <div className="emoji">{MOVIES[index].emojis}</div>
          <div className="send">
            <input
              placeholder="Enter the name of the Movie"
              required
              onChange={handleChange}
              id="input"
              value={movie}
            ></input>
            <button id="btnCheck" onClick={validateMovie} value={movie}>
              Send
            </button>
          </div>
          <h2>
            Points: {points} - Lives: {live}
          </h2>
        </div>
        <button className="startAgain" onClick={startAgain}>
          Start Again
        </button>
      </div>
    </div>
  );
}

export default App;
