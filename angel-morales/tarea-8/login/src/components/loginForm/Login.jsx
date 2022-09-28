import "./login.css";

import { useState } from "react";

export function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = {
      ...form,
      [name]: value,
    };

    setForm(newValues);
  };

  const url = "";
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-form__title">Login</h1>
      <div className="login-form__input ">
        <label htmlFor="email"> Email </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="login-form__input ">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            onChange={handleChange}
          />
        </div>
        <div className="login-form__recovery">
          <a href={url}>Forgot Password?</a>
        </div>
      </div>

      <button className="button button__login" type="submit">
        SIGN IN
      </button>
      <div className="login-form__register">
        <a href={url}>Create account</a>
      </div>
    </form>
  );
}

export const validateForm = function (form) {
  const counts = {
    email: "angel@gmail.com",
    password: "1234567",
  };
  if (form.email !== "" && form.password !== "") {
    if (form.email === counts.email && form.password === counts.password) {
      return "Welcome";
    } else if (
      form.email !== counts.email ||
      form.password !== counts.password
    ) {
      return "One of the fields is incorrect";
    }
  } else {
    return "Fields are empty";
  }
};
