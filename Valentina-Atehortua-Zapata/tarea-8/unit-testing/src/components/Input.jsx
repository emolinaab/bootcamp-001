import React from "react";

const Input = ({ input, onChange, placeholder, name }) => {
  return (
    <input
      type={input}
      className="form-control"
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
