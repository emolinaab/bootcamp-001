import React from "react";
import TodoDetails from "./todoDetails/TodoDetails";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";

const TodoDetailsPage = () => {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo?.id === id)
  );
  if (!todo) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <TodoDetails todo={todo} />
    </div>
  );
};

export default TodoDetailsPage;
