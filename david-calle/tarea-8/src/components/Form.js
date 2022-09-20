import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const checkValidity = (username, password) => {
    return false;
  };

  const signIn = () => {};

  const handleSubmit = () => {};

  function handleChange(e) {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  return (
    <div>
      <div>
        <form>
          <div>
            <label for="fname">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label for="lname">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <input
            type="submit"
            value="Sign In"
            disabled={checkValidity(formData.username, formData.password)}
          />
        </form>
      </div>
    </div>
  );
}
