import React, { useState } from "react";
import "./form.css";
import { checkValidAccount, signIn } from "../utils";

export default function Form() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData.username, formData.password)
      .then((result) => {
        setIsLoggedIn(result);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  function handleChange(e) {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  if (isLoggedIn) {
    return (
      <div className="form-container">
        <p>You've successfully logged in</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <p className="form-text">Sign In</p>
      <p className="error">{error}</p>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="fields-container">
            <div className="input-container">
              <label htmlFor="username" className="input-label">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="input-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <input
            type="submit"
            value="SIGN IN"
            className="form-button"
            disabled={!checkValidAccount(formData.username, formData.password)}
          />
        </form>
      </div>
    </div>
  );
}
