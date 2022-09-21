import React from "react";
import "./emojiGame.css";

const AnswerInput = ({ answer, setAnswer, submitAnswer }) => {
  return (
    <section className="answer-input-container">
      <form onSubmit={submitAnswer}>
        <label htmlFor="movieName">
          <span className="screenreader">Name of the movie </span>
        </label>
        <input
          className="answer-input-field"
          type="text"
          name="movieName"
          id="movieName"
          placeholder="type the name of the movie..."
          value={answer}
          onChange={setAnswer}
        />
        <input className="answer-input-button" type="submit" value="send" />
      </form>
    </section>
  );
};

export default AnswerInput;
