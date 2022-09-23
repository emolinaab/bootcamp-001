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
    alert("The data has been sent");
    console.log("Data sent successfully");
    console.log("user", values);
  };

  function formValidate(e) {
    e.preventDefault();
    if (
      values.userName === data.userName &&
      values.password === data.password
    ) {
      handleSubmit();
    } else if (values.userName.length <= 0 || values.password.length <= 0) {
      alert("The field is empty");
      console.log("Please, enter data");
    } else {
      alert("Sorry, wrong data");
      console.log("Data sent are incorrect");
    }
  }

  return (
    <div className="container">
      <form
        action="#"
        className="form"
        onSubmit={formValidate}
        aria-label="form"
      >
        <PrincipalTitle title="Login" />
        <h1>Welcome, make your registration</h1>
        <div className="box">
          <div className="form-group">
            <Label label={"User Name"} />
            <Input
              onChange={handleChange}
              input={"email"}
              placeholder={"example@correo.com"}
              name={"userName"}
            />
          </div>
          <div className="form-group">
            <Label label={"Password"} />
            <Input
              input={"password"}
              onChange={handleChange}
              placeholder={"Enter your password"}
              name={"password"}
            />
          </div>
          <Button button={"button"} text={"Sing In"} />
        </div>
      </form>
    </div>
  );
}

export default App;
