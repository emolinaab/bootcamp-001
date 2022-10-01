import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { movies, moviesNames } from "./movies";

export const GuessMovie = () => {
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [lifes, setLifes] = useState(5);

  let res = " ";

  const handleSubmit = (e) => {
    if (moviesNames[index] === input) {
      if (points < movies.length - 1) {
        toast.success("Correct Answer!!!", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setPoints(points + 1);
        setIndex(index + 1);
        setInput("");
      } else {
        toast.success("Congratulations!!! 🎉🎉🎉", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload();
        }, 4500);
      }
    } else {
      if (lifes > 1) {
        toast.error("Wrong Answer!!!", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLifes(lifes - 1);
        setInput("");
      } else {
        toast.warning("you lost, restarting...", {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    }
  };

  const handleChange = (e) => {
    res = e.target.value;
    setInput(res.toLowerCase());
  };

  return (
    <main className="main-container">
      <header className="main-container__header">
        <article className="main-container__title">
          <h1>LIFES: {lifes}</h1>
          <h1>POINTS: {points}</h1>
        </article>
      </header>
      <section className="main-container__emojis">
        <ul>
          <li>{movies[index]}</li>
        </ul>
      </section>
      <section className="main-container__guess">
        <input
          type="text"
          placeholder="Enter the name of the movie"
          onChange={handleChange}
          value={input}
        />
        <button onClick={handleSubmit} className="guess">
          Guess the movie
        </button>
      </section>
      <ToastContainer />
    </main>
  );
};
