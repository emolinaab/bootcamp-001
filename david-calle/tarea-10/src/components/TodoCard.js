import React from "react";

const TodoCard = ({ id, title, description }) => {
  return (
    <div>
      <h2>
        {id}: {title}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default TodoCard;
