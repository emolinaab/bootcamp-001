import React from "react";
import { addTodo } from "../actions";
import "../styles/Add.css";

const Add = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button className="buttons" type="submit">
          Add task
        </button>
      </form>
    </div>
  );
};

export default Add;
