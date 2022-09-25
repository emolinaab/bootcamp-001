import React, { useState } from "react";
import "../resources/css/styles.css";

export const GuessMovie = () => {
  const movies = [
    "🐠❓",
    "👨🍫🏭",
    "👨🏼🔨⚡",
    "👦🏻👓⚡️",
    "⭐💣⚔️",
    "👸🏿🐸💋",
    "🐼🥋👊",
  ];
  const moviesNames = [
    "buscando a nemo",
    "charlie y la fabrica de chocolate",
    "thor",
    "harry potter",
    "star wars",
    "la princesa y el sapo",
    "kung fu panda",
  ];
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [lifes, setLifes] = useState(3);

  let resp = " ";

  const handleOnChange = (e) => {
    resp = e.target.value;
    setInput(resp.toLowerCase());
  };

  const handleOnSend = (e) => {
    if (moviesNames[index] === input) {
      if (points < movies.length - 1) {
        setPoints(points + 1);
        setIndex(index + 1);
        setInput("");
      } else {
        alert("GANASTE!");
        window.location.reload(false);
      }
    } else {
      if (lifes > 1) {
        setLifes(lifes - 1);
        setInput("");
      } else {
        alert("PERDISTE!");
        window.location.reload(false);
      }
    }
  };

  return (
    <html>
      <body>
        <main>
          <article>
            <section>
              <div className="container">
                <div className="container-child">
                  <header className="header">
                    <h1 className="title title1">Vidas: {lifes}</h1>
                    <h1 className="title title2">Puntos: {points}</h1>
                  </header>
                  <div className="emojis"> {movies[index]} </div>
                  <section className="box">
                    <input
                      type="text"
                      placeholder="Ingrese el nombre de la pelicula"
                      onChange={handleOnChange}
                      value={input}
                    />
                    <button onClick={handleOnSend} className="guess">
                      {" "}
                      Adivinar pelicula{" "}
                    </button>
                  </section>
                </div>
              </div>
            </section>
          </article>
        </main>
      </body>
    </html>
  );
};
