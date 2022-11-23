import React, { useEffect } from "react";
import "./styles.css";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { deleteAll, persistTodos } from "./redux/action/addTodo.action";
import { connect } from "react-redux";

const App = ({ deleteAll, persistTodos }) => {
  useEffect(() => {
    persistTodos();
  }, [persistTodos]);
  return (
    <div className="App">
      <h1>To do List</h1>
      <InputField />
      <TodosList />
      <div>
        <button
          style={{ marginTop: "20px", cursor: "pointer" }}
          onClick={deleteAll}
        >
          {" "}
          Eliminar todo
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos()),
});
export default connect(null, mapDispatchToProps)(App);
