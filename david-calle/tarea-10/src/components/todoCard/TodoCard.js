import React from "react";
import "./todoCard.scss";
import { toggleTodo } from "../../redux/actions/todo.actions";
import { useDispatch } from "react-redux";

const TodoCard = ({ id, title, description, completed }) => {
  const dispatch = useDispatch();
  const handleComplete = () => {
    dispatch(toggleTodo(id));
  };
  return (
    <li className="card">
      <div className="card-data-container">
        <h2 className={`card-title ${completed && "completed"}`}>{title}</h2>
        {description && (
          <p className={`card-description ${completed && "completed"}`}>
            {description}
          </p>
        )}
      </div>
      <button className="card-completed-button" onClick={handleComplete}>
        {completed ? "⏪" : "👌"}
      </button>
    </li>
  );
};

export default TodoCard;
