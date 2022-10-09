import Input from './components/input';
import './App.css';
import List from './components/list';

import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <Input></Input>
      <div id="list">
      <List></List>
      </div>
    </div>
  );
}

export default App;
