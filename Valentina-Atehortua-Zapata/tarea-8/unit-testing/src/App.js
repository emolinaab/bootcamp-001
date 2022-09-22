import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import PrincipalTitle from "./components/PrincipalTitle";

function App() {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });

  let data = {
    userName: "valen@gmail.com",
    password: "1234",
  };

  let data1 = {
    userName: "",
    password: "",
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
    console.log(value);
  };

  const handleSubmit = () => {
    alert("Los datos han sido enviados");
    console.log("data sent successfully");
    console.log("user", values);
  };

  function formValidate(e) {
    e.preventDefault();
    if (
      values.userName === data.userName &&
      values.password === data.password
    ) {
      handleSubmit();
    } else if (
      values.userName === data1.userName &&
      values.password === data1.password
    ) {
      alert("El campo está vacío");
    } else {
      alert("lo siento, datos incorrectos");
    }
  }

  return (
    <div className="container">
      <form action="#" className="form" onSubmit={formValidate}>
        <PrincipalTitle title="Sing in" />
        <div className="box">
          <div className="form-group">
            <Label label={"User Name"} />
            <Input
              onChange={handleChange}
              input={"email"}
              placeholder={"Ingresa tu email"}
              name={"userName"}
            />
          </div>
          <div className="form-group">
            <Label label={"Password"} />
            <Input
              input={"password"}
              onChange={handleChange}
              placeholder={"Ingresa tu password"}
              name={"password"}
            />
          </div>
          <Button button={"button"} text={"Sing In"} />
          <a href="">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default App;
