import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../features/tasks/taskSlice";
import "./todo_list.css";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="content">
      {tasks.map((el) => (
        <li key={el.id} className="content__list">
          <p>{el.task}</p>
          <button onClick={() => handleDelete(el.id)} className="button">
            -
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
