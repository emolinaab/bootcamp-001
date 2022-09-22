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
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name,value } = e.target;
    setValues((finalValue) => {
      return{
        ...finalValue,
        [name]:value,
      };
    });
  }

  const handleSubmit = () => {
    alert("Se han enviado los datos correctamente.");
    console.log("user", values)
  }

  function formValidations(e){
    e.preventDefault();
    if(
      values.userName === data.userName && values.password === data.password
    ){
      handleSubmit();
    }else{
      alert("Datos incorrectos")
    }
  }

  return (
    
    <section class="container">
      <form class="form-login" onSubmit={formValidations}>
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
              placeholder={"*****"}
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
