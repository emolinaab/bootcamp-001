import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todo.actions";

const TodoForm = () => {
  const initialFormState = {
    title: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const dispatch = useDispatch();
  const nextId = useSelector((state) => state.todos.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(nextId, formData.title, formData.description));
    cleanFormData();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const cleanFormData = () => {
    setFormData(initialFormState);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            type="text"
          />
        </div>
        <input type="submit" value="save todo" />
      </form>
    </section>
  );
};

export default TodoForm;
