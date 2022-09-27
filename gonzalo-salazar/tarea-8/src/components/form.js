import React from "react";
import { Formik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Password too short";
  }

  return errors;
};

const submitForm = () => {
  alert("Inicio de sesion exitoso");
  window.location.reload();
};

const Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <section className="container-form">
            <h1 className="container-form__title">Sign in</h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="container-form__row">
                <label>Email</label>
                <input
                  placeholder="Enter email"
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </fieldset>

              <fieldset className="container-form__row">
                <label>Password</label>
                <input
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                {errors.password && touched.password && (
                  <span className="error">{errors.password}</span>
                )}
              </fieldset>

              <button
                type="submit"
                disabled={!(dirty && isValid)}
                className={!(dirty && isValid) ? "disabled-btn" : "actived-btn"}
              >
                Sign In
              </button>
            </form>
          </section>
        );
      }}
    </Formik>
  );
};

export default Form;
