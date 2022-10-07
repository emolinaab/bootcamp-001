import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { FiCheck } from "react-icons/fi";
import { deleteTodo } from "../features/todoSlice/todoSlice";

const Todo = ({ title, id }) => {
  const dispatch = useDispatch();
  const [isDone, setIsDone] = useState(false);

  const deleteTask = () => {
    dispatch(deleteTodo(id));
  };

  function taskReady() {
    setIsDone(true);
  }

  return (
    <div>
      <div className="icons todo-row">
        {isDone ? <h4 className="titleSub">{title}</h4> : <h4>{title}</h4>}
        <div className="containerIcon">
          {" "}
          <RiCloseCircleLine
            className="delete-icon"
            onClick={() => deleteTask(id)}
          />
          <FiCheck onClick={taskReady}></FiCheck>
        </div>
      </div>
    </div>
  );
};

export default Todo;
