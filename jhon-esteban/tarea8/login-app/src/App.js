import React, {useState} from "react";
import './App.css';
import dragonite from '../src/assets/img/dragonitepeque.png'
import PrincipalTitle from './components/PrincipalTitle';
import Label from './components/Label';
import Input from './components/Input';
import Button from './components/Button';

function App() {

  const [values, setValues] = useState({
    userName: "",
    password: "",
  });

  let data ={
    userName: "jhon.esteban@gmail.com",
    password: "12345",
  }


  const handleChange = (event) => {
    event.preventDefault();
    const { name,value } = event.target
    setValues((finalValue) => {
      return{
        ...finalValue,
        [name]:value,
        
      }
    })
  }

  const handleSubmit = () => {alert("The data has been sent")}

  function formValidations(e){
    e.preventDefault()
    if(
      values.userName === data.userName && values.password === data.password
    ){
      handleSubmit()
    }else if (values.userName.length <= 0 || values.password.length <= 0){
      alert("The field is empty")
    }
    else{
      alert("Sorry, the data is wrong")
    }
  }

  return (
    
    <section class="container">
      <form class="form-login" onSubmit={formValidations} aria-label="form">
        <PrincipalTitle tittle={"Please Sign In"}/>
          <div class="box">
            <div class="form-group">
              <Label label={"User Name"}/>
              <Input 
              onChange={handleChange}
              placeholder={"example@gmail.com"}
              name={"userName"}
              input={"email"}/>
            </div>
            <div class="form-group">
              <Label label={"Password"}/>
              <Input
              onChange={handleChange}
              placeholder={"Enter your password"}
              name={"password"} 
              input={"password"}/>
            </div>
            <Button button={"loginbutton"} text={"Log in"}/>
              <a href="">Forgot Password?</a> 
            <div class="form-group">

              <img src={dragonite}></img>
            </div>  
          </div>
      </form>
    </section>

  );
}

export default App;
