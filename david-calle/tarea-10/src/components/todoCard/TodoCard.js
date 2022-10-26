import React from "react";
import "./todoCard.scss";
import { toggleTodo } from "../../redux/actions/todo.actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
      <button className="card-button" onClick={handleComplete}>
        {completed ? "⏪" : "👌"}
      </button>
      <Link
        className="card-button"
        to={`todos/${id}`}
        style={{ textDecoration: "none", backgroundColor: "white" }}
      >
        ℹ️
      </Link>
    </li>
  );
};

export default TodoCard;
