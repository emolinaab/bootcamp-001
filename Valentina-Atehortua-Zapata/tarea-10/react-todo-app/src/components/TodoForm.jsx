import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice/todoSlice";

const TodoForm = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: input,
        id: Math.floor(Math.random() * 10000),
      })
    );
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        required
        onChange={handleChange}
        placeholder="Update your item"
        name="text"
        className="todo-input edit"
        value={input}
      />
      <button className="todo-button edit">Update</button>
    </form>
  );
};

export default TodoForm;
