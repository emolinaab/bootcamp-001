import React, { useState } from "react";

export const GuessForm = ({ onNewGuess }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value.toUpperCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    onNewGuess(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type a name"
          value={inputValue}
          onChange={onInputChange}
        />
        <button>Send</button>
      </form>
    </>
  );
};
