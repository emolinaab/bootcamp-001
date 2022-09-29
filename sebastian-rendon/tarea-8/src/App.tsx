import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './App.css';
import FormBtn from './components/FormBtn';
import FormContainer from './components/FormContainer';
import FormField from './components/FormField';

const schema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[A-Z0-9_]*$/i, 'Username must not contain special characters')
    .min(4, 'Username must be at least 4 characters')
    .max(32, 'Username must be at most 32 characters')
    .required('Username is required'),
  password: yup
    .string()
    .matches(/^\S*$/i, 'Password must not contain white spaces')
    .min(4, 'Password must be at least 4 characters')
    .max(16, 'Password must be at most 16 characters')
    .required('Password is required'),
});

function App() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: { username: '', password: '' },
  });

  function onSubmit() {
    console.log('You are signed in!');
    console.log(getValues('username'));
    console.log(getValues('password'));

    return getValues();
  }

  function onInvalid() {
    if (errors.username) console.log(errors.username.message);
    if (errors.password) console.log(errors.password.message);

    return errors;
  }

  return (
    <main>
      <FormContainer
        className="form-container"
        onSubmit={handleSubmit(onSubmit, onInvalid)}
      >
        <h3>Sign in</h3>
        <hr
          style={{
            backgroundColor: 'skyblue',
            color: 'skyblue',
            borderStyle: 'solid',
          }}
        />
        <FormField
          label="Username"
          inputId="username"
          placeholder="Enter your username"
          register={() => register('username', { required: true })}
          errorMessage={errors.username?.message}
        />
        <FormField
          label="Password"
          inputId="password"
          inputType="password"
          placeholder="Enter your password"
          register={() => register('password', { required: true })}
          errorMessage={errors.password?.message}
        />
        <FormBtn label="Sign in" />
      </FormContainer>
    </main>
  );
}

export default App;
