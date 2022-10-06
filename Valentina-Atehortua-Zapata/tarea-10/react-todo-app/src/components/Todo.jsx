import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todoSlice/todoSlice";

const Todo = ({ title, id }) => {
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <div className="icons todo-row">
        <h4>{title}</h4>
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => deleteTask(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
