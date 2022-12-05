import React from 'react';
import './App.css';
import {Login} from './components/Login';

const Loginreturn = result =>{
  alert( result );
}

function App() {
  return (
    <div className="App">
      <Login Loginreturn={ Loginreturn }/>
    </div>
  );
}

export default App;
