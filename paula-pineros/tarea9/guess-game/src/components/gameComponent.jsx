import React, { useState } from "react";

const movies = [
  {
    id: 0,
    name: "Ratatouille",
    emojis: "π­π΄π§π»",
  },
  {
    id: 1,
    name: "The princess and the frog",
    emojis: "ππΈπ₯―",
  },
  {
    id: 2,
    name: "Mary Poppins",
    emojis: "π©βπ¦βπ¦ππ§€",
  },
  {
    id: 3,
    name: "Stuart Little",
    emojis: "π­π¦πΌπ",
  },
  {
    id: 4,
    name: "Finding Nemo",
    emojis: "π ππ‘",
  },
  {
    id: 5,
    name: "ET",
    emojis: "π½π²π",
  },
  {
    id: 6,
    name: "Batman",
    emojis: "ππ¦π",
  },
  {
    id: 7,
    name: "Alice's Adventures in Wonderland",
    emojis: "π§πΌπ°π©",
  },
  {
    id: 8,
    name: "The lion king",
    emojis: "π¦ππ¦",
  },
  {
    id: 9,
    name: "Harry Potter",
    emojis: "πβ‘π¦",
  },
];

const order = [];

function Game({ lives, setLives, points, setPoints, movie, setMovie }) {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const clearInput = ()=>{
    setName('');
  }
  return (
    <main>
      <p>{movie}</p>
      <input type="text" id="name" onChange={handleChange}></input>
      <br></br>
      <br></br>
      <button onClick={() => orderMovies(order, setLives, setPoints, setMovie, points)}>Reiniciar</button>
      <button
        onClick={() =>
          validate(
            name,
            lives,
            setLives,
            points,
            setPoints,
            setMovie,
            order, clearInput
          )
        }
      >
        Jugar
      </button>
    </main>
  );
}

function validate(
  name,
  lives,
  setLives,
  points,
  setPoints,
  setMovie,
  order, clearInput
) {
  let index = order[points];
  let movieName = name.toLowerCase();
  let answerName = movies[index].name.toLowerCase();
  if (name == "") {
    alert("No ingresΓ³ ningΓΊn nombre.")
    showMovie(setMovie, points);

  } else if (movieName == answerName) {
    alert("Correcto.")
    index = order[points+1];
    changePoints(clearInput, lives, setLives, points, setPoints, true);
    showMovie(setMovie, points+1);
  } else {
    alert("Ese no es el nombre correcto.");
    changePoints(clearInput, lives, setLives, points, setPoints, false, setMovie);
  }
  document.getElementById('name').value = ''
}

function changePoints(clearInput, lives, setLives, points, setPoints, win, setMovie) {
  if (win == true) {
    setPoints(points + 1);
    if(points == 8){
      alert("Felicitaciones" + "\n Ha completado todos los niveles con " + lives + " vidas.")
    }
  } else {
    setLives(lives - 1);
    if (lives == 1) {
      alert("You lost with " + points + " points" +"\n Presione reiniciar para volver a comenzar el juego");
      clearInput();
      orderMovies(order, setLives, setPoints, setMovie, points)
    }
  }
}

function showMovie(setMovie, points) {
  let index = order[points];
  setMovie(movies[index].emojis);
}

function orderMovies(order, setLives, setPoints, setMovie, points) {
  while (order.length != movies.length) {
    let number = Math.floor(Math.random() * (movies.length - 1 - 0 + 1)) + 0;
    if (order.includes(number) == false) {
      order.push(number);
    }
  }
  setLives(3);
  setPoints(0);
  showMovie(setMovie, points);
  return order;
}

export default Game;
