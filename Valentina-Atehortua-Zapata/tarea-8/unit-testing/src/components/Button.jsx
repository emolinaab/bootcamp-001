import React from "react";

const Button = ({ button, text }) => {
  return (
    <button type={"submit"} className={button}>
      {text}
    </button>
  );
};

export default Button;
