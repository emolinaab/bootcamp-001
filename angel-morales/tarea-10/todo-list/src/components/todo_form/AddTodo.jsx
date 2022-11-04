import { useState } from "react";
import { useDispatch } from "react-redux";
import { newTask } from "../../features/tasks/taskSlice";
import "./add_todo.css";

function TasksForm() {
  const [id, setId] = useState(1);
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;
    dispatch(newTask({ task, id: id }));
    setId(id + 1);
    setTask("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Task</label>
        <div className="form__content">
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Task"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button className="form__submit">+</button>
        </div>
      </form>
    </>
  );
}

export default TasksForm;
