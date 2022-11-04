import React from "react";


const Checkbox = (checkIn) => {

    const {
        onChange,
        data: { id, description, done }
      } = checkIn;
  return (
    <div>
      <label className="todo new-item">
        {}
        <input
          className="todo__state"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="todo__text">{description}</div>
      </label>
    </div>
  )
}

export default Checkbox