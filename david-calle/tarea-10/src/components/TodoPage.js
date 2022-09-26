import React from "react";
import TodoForm from "./todoForm/TodoForm";
import TodoList from "./todoList/TodoList";

export default function TodoPage() {
  return (
    <section>
      <TodoForm />
      <TodoList />
    </section>
  );
}
