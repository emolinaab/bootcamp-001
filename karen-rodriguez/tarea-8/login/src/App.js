
import Label from './components/Label'
import Input from './components/Input'
import Link from './components/Link'
import Button from './components/Button'
import './App.css'
import { useState } from 'react';

function App() {
  const [userName, setUsername]=useState("")
  const [password, setPassword]=useState("")
  let data= {userName:"karen", password:"1234"}

  const handleChangeUsername = (event)=>{
    event.preventDefault();
    const {value}=event.target
   setUsername(value)
  }

  const handleChangPassword = (event)=>{
    event.preventDefault();
    const {value}=event.target
   setPassword(value)
  }

  //const handleSubmit = ()=>{alert("Se han enviado los datos correctamente")}

  function formValidation(event){
    event.preventDefault()
    
    if(userName === data.userName && password === data.password){
      alert("The data has been sent correctly")
    }
    
    if(userName =="" && password === ""){
      alert("All fields must be filled")
    }
    else{
      alert("Incorrect data")
    }
  }

  return (
  
    <div id="formContainer" className='container'>
      <form id="form"  className='container' onSubmit={formValidation} aria-label="form">
        <h1 id="principalTittle">Sing in </h1>
        <div className="text container">
          <div className="textBox container">
            <Label text={'User Name'}></Label>
            <Input placeholder={'userName'} type={'text'} onChange={handleChangeUsername} name={'userName'}></Input>
          </div>
          <div className="textBox container">
            <Label text={'Password'}></Label>
            <Input placeholder={"password"} type={'password'} onChange={handleChangPassword} name={'password'}></Input>
          </div>
          <div className='buttonContainer container'>
          <Button id="button-login" text={'Sing in'} ariaLabel="button"/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;

