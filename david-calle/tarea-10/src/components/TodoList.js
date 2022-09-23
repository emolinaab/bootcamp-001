import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const todoCards = todos?.map((todo) => (
    <TodoCard id={todo.id} title={todo.title} description={todo.description} />
  ));
  return <section>{todoCards}</section>;
};

export default TodoList;
