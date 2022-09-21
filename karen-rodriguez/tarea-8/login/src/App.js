
import './App.css';

import Link from './components/Link';

import Label from './components/Label'
import Input from './components/Input'

function App() {
  return (
  
    <div id="container">
      <form id="form">
        <h1>Sing in </h1>
      
        <div className="textBox">
          <Label text={'User Name'}></Label>
          <Input type={'text'}></Input>
        </div>
        <div className="textBox">
          <Label text={'Password'}></Label>
          <Input type={'password'}></Input>
        </div>
        
        <button id="singIn" type='submit'>Sing in</button>
        <div className="textBox">
          <Link href={''} text='Forgot password'></Link>
          <Link href={''} text='Sing up'></Link>
        </div>
      </form>
    </div>
  );
}

export default App;
