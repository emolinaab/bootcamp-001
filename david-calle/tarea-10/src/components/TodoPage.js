import React from "react";
import TodoForm from "./todoForm/TodoForm";
import TodoList from "./todoList/TodoList";
import { Outlet } from "react-router-dom";
import "./todoPage.scss";

export default function TodoPage() {
  return (
    <section>
      <div className="todo-list-wrapper">
        <div className="todo-list-base">
          <TodoForm />
          <TodoList />
        </div>
        <div className="todo-list-details">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
