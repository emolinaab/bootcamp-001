import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import SuccessLogin from "./components/SuccessLogin/SuccessLogin";
import { data } from "./data";

function App() {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const [loginSucess, setLoginSuccess] = useState(false);

  const [isInvalid, setIsInvalid] = useState(false);

  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    console.log("form sent successfully");
    console.log(formValue);
    setFormValue({
      username: "",
      password: "",
    });
  };

  const validateSubmit = (e) => {
    e.preventDefault();
    if (
      data.user === formValue.username &&
      data.password === formValue.password
    ) {
      handleSubmit();
      setIsInvalid(false);
      setLoginSuccess(true);
    } else if (
      formValue.username.length <= 0 ||
      formValue.password.length <= 0
    ) {
      setIsEmpty(true);
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
      setLoginSuccess(false);
    }
  };

  return (
    <div>
      {loginSucess ? (
        <SuccessLogin />
      ) : (
        <div className="App">
          <div className="title-container">
            <h3>Hello Again!</h3>
            <p>Welcome back to our platform</p>
          </div>

          <form onSubmit={validateSubmit} aria-label="form">
            <Input
              placeholder={"Username"}
              type={"text"}
              name={"username"}
              onChange={handleChange}
              value={formValue.username}
            />
            <Input
              placeholder={"Password"}
              type={"password"}
              name={"password"}
              onChange={handleChange}
              value={formValue.password}
            />

            <Button text={"Sing in"} />
            {isInvalid ? (
              <p className="invalid-message">
                Sorry, try again, the credentials are incorrect
              </p>
            ) : isEmpty ? (
              <p>Please, fill the fields</p>
            ) : (
              <p></p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
export default App;
