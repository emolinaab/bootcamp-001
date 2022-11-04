import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todoState = useSelector((state) => state.todo);

  return (
    <div>
      {todoState.map((item) => (
        <Todo key={item.id} title={item.title} id={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
