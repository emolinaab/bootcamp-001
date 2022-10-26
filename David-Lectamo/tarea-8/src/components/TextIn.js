import React from 'react';
import '../stylesheets/TextIn.css';

function TextIn(props) {
  return (
    <div className='containterTextIn'>
      <p className = 'generalText'>{props.name}</p>
      <input type={props.type} className='textIn' required id={props.type} onChange={props.onChange} value={props.value}></input>
    </div>
  );
}

export default TextIn;