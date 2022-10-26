import "./sections.css";
import { Message } from "../section_message/Message";
import { useState } from "react";
import { searchMovie, showEmoji } from "../search_movie/search_movie";

export const Content = () => {
  const [live, setLive] = useState(3);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [message, setMenssage] = useState();
  const [validate, setValidate] = useState(false);
  const [display, setDisplay] = useState(showEmoji());

  const reset = () => {
    setLive(3);
    setScore(0);
    setValidate(false);
    setName("");
    setMenssage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchMovie(name, display) === true) {
      setDisplay(showEmoji());
      setValidate(false);
      setName("");
      setScore(score + 1);
    } else {
      setValidate(true);
      if (live > 1) {
        setLive(live - 1);
      } else {
        setLive(0);
        setMenssage("Sorry, game over 😥😣");
        if (live === 0) reset();
      }
    }
  };

  return (
    <div className="sections">
      <section className="section__top">
        <p>Lives: {live}</p>
        <p>Points: {score}</p>
      </section>
      <section className="section__center">
        <h1>Guess the film</h1>
      </section>
      <section className="section__botton">
        <div className="section__display">
          <span>{display}</span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input">
            <label htmlFor="movie" className="form__label">
              What movie is it?
            </label>
            <input
              value={name}
              type="text"
              className="form__text"
              name="movie"
              id="movie"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className="button">Send</button>
        </form>
        <Message boolean={validate} message={message} />
      </section>
    </div>
  );
};
