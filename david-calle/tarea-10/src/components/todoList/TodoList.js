import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../todoCard/TodoCard";
import TodoFilter from "./TodoFilter";
import {
  SHOW_ALL,
  SHOW_PENDING,
  SHOW_COMPLETED,
} from "../../utilities/constants";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const getFilteredTodos = (todos) => {
    switch (filter) {
      case SHOW_ALL:
        return todos;
      case SHOW_PENDING:
        return todos.filter((todo) => !todo.completed);
      case SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const todoCards = getFilteredTodos(todos).map((todo) => (
    <TodoCard
      id={todo.id}
      title={todo.title}
      description={todo.description}
      completed={todo.completed}
      key={todo.id}
    />
  ));

  return (
    <section>
      <h1>TODO LIST</h1>
      <TodoFilter />
      <ul className="card-list">{todoCards}</ul>
    </section>
  );
};

export default TodoList;
