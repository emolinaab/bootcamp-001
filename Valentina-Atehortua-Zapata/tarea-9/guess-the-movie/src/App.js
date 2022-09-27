import "./App.css";
import { MOVIES } from "./data";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState("");
  const [index, setIndex] = useState(0);

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
      alert("The name of the movie is correct");
      numberRandom();
    } else {
      alert("The name of the movie is wrong");
    }
    clear();
  };

  function clear() {
    let input = document.getElementById("input");
    input.value = "";
  }

  return (
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
          ></input>
          <button onClick={validateMovie} value={movie}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
