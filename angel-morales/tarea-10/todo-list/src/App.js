import React from "react";
import "./App.css";
import AddTodo from "./components/todo_form/AddTodo";
import TodoList from "./components/todo_list/TodoList";

function App() {
  return (
    <div className="App">
      <div className="section">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
