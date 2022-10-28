import React, { useState } from "react";
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';



function App() {  
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const data = {

    userName: "jomar2030@hotmail.com",
    password: "1234" 
}
const handleChangeUsername = (e) => {
  e.preventDefault();
  const { value } = e.target;
  setuserName(value);
};
const handleChangePassword = (e) => {
  e.preventDefault();
  const { value } = e.target;
  setPassword(value);
};
const handleSubmit = () => {
  alert("The data has been sent");
  console.log("Data sent successfully");
  console.log("user", userName, password);
};
  function validationform (event){
    if(userName === data.userName && password === data.password){handleSubmit()}else{console.log("error")}
  }
  return (
    <div className='signupFrm'>
    <form action="" className='form' aria-label="form" onSubmit={validationform}>
      <h1 className='title'>Sign in</h1>      

      <div className='inputContainer'>
        <Input placeholder={"enter your email"}
        onChange={handleChangeUsername}></Input>
        <Label text={"Username"}></Label>
      </div>

      <div className='inputContainer'>
        <Input placeholder={"password"}
        onChange={handleChangePassword}></Input>
        <Label text={"Password"}></Label>
      </div>

      <Button value={"Sign up"}></Button>
      <div className='pass'>
        
      </div>
    
      
    </form>
  </div>
  );
}

export default App;
