import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {setValueInput,unsetValueInput} from './app/reducers/inputSlice'
import {addItemToList} from './app/reducers/listSlice'

import './App.css';

import List from './components/list/List';

function App() {
  const dispatch = useDispatch();
  //premite consumir el estado
  let {stateValueInput} = useSelector(state => state.input)

  function handleChange(e){
    e.preventDefault();   
    dispatch(setValueInput({stateValueInput:e.target.value}))
  }

  function handleClick(){
    dispatch(addItemToList({value: stateValueInput}))
    dispatch(unsetValueInput())
  }

  return (
    <div id="MyTodoList">
      <div className='inputContainer'>
        <input type="text" onChange={handleChange} value={stateValueInput} placeholder='
Add to the list...'></input>
        <div id="btnAdd" onClick={handleClick}>
          ➕
        </div>
      </div>
      <h1 id="principalTitle">My to do list</h1>
      <List></List>         
    </div>
  );
}

export default App;
