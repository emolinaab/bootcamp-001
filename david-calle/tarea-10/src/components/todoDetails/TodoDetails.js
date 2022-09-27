import React from "react";

const TodoDetails = ({ todo }) => {
  const { id, title, description, completed } = todo;
  return (
    <section>
      <h1>
        {id}. {title}
      </h1>
      <p>{description}</p>
      <p>status: {completed ? "completed" : "pending"}</p>
    </section>
  );
};

export default TodoDetails;
