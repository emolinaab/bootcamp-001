import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import PrincipalTitle from "./components/PrincipalTitle";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let data = {
    userName: "valen@gmail.com",
    password: "1234",
  };

  const handleChangeUsername = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setUsername(value);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = () => {
    alert("The data has been sent");
    console.log("Data sent successfully");
    console.log("user", username, password);
  };

  function formValidate(e) {
    e.preventDefault();
    if (username === data.userName && password === data.password) {
      handleSubmit();
    } else if (username.length <= 0 || password.length <= 0) {
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
              onChange={handleChangeUsername}
              input={"email"}
              placeholder={"example@correo.com"}
              name={"userName"}
              value={username}
            />
          </div>
          <div className="form-group">
            <Label label={"Password"} />
            <Input
              input={"password"}
              onChange={handleChangePassword}
              placeholder={"Enter your password"}
              name={"password"}
              value={password}
            />
          </div>
          <Button button={"button"} text={"Sing In"} />
        </div>
      </form>
    </div>
  );
}

export default App;
