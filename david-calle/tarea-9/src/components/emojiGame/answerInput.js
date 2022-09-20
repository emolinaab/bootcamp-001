import React from "react";
import "./emojiGame.css";

const AnswerInput = ({ answer, setAnswer, submitAnswer }) => {
  return (
    <div className="answer-input-container">
      <input
        className="answer-input-field"
        type="text"
        value={answer}
        onChange={setAnswer}
      />
      <button className="answer-input-button" onClick={submitAnswer}>
        Send
      </button>
    </div>
  );
};

export default AnswerInput;
