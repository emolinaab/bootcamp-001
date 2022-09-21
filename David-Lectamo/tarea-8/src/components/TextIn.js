import React from 'react';
import '../stylesheets/TextIn.css';

function TextIn(props) {
  return (
    <div className='containterTextIn'>
      <p className = 'generalText'>{props.name}</p>
      <input type={props.type} class='textIn' required id={props.type}></input>
    </div>
  );
}

export default TextIn;