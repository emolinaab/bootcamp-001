import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const todoItems = useSelector((state) => state.todo);

  return (
    <div className="todo-app">
      <h1>What needs to be done</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
