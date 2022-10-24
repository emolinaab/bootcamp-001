import "./../css/login.css";

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

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form-title">Inicio de sesión</h1>
      <div className="form-input">
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" name="email" type="email" onChange={handleChange} />
      </div>
      <div>
        <div className="form-input">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className="remember-password">
          <a>¿Has olvidado tu contraseña?</a>
        </div>
      </div>

      <button className="button btn-login" type="submit">
        Iniciar sesion
      </button>
      <div className="form-register">
        <a>Crear cuenta</a>
      </div>
    </form>
  );
}

export const validateForm = function (form) {
  const counts = {
    email: "f.gongoraandrade@gmail.com",
    password: "admin12345",
  };
  if (form.email !== "" && form.password !== "") {
    if (form.email === counts.email && form.password === counts.password) {
      return "Hola, login exitoso";
    } else if (
      form.email !== counts.email ||
      form.password !== counts.password
    ) {
      return "Uno de los campos es incorrecto";
    }
  } else {
    return "Campos obligatorios";
  }
};
