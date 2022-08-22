import React from "react";
import '../stylesheets/Driver.css';

function Driver (props) {
  return (
    <div className = 'drivercontainer'>
      <p className = 'nameDriver'>
        <strong> {props.name} </strong>
      </p>
      <p className = 'question'>
        {props.question}
      </p>
    </div>
  );
}

export default Driver;