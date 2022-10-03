import { render } from '@testing-library/react';
import { handleLogIn } from './components/form';
import Login from './components/form'

test('Both email and password are empty', () => {
  render(<Login/>);
  const message = handleLogIn({email:"",password:""})
  expect(message).toBe("All data is required!")
})

test('Email field is  empty', () => {
  render(<Login/>);
  const message = handleLogIn({email:"",password:"contraseña"})
  expect(message).toBe("All data is required!")
})

test('password field is empty', () => {
  render(<Login/>);
  const message = handleLogIn({email:"sebitax@globant.com",password:""})
  expect(message).toBe("All data is required!")
})

test('Password is less than 8 characters', () => {
  render(<Login/>);
  const message = handleLogIn({email:"sebitax@globant.com",password:"contra"})
  expect(message).toBe("Password must be at least 8 characters!")
})

test('Email is less than 5 characters', () => {
  render(<Login/>);
  const message = handleLogIn({email:"s@co",password:"contraseña"})
  expect(message).toBe("Not a valid email!")
})

test('Invalid Email (No @)', () => {
  render(<Login/>);
  const message = handleLogIn({email:"sebastian.es",password:"contraseña"})
  expect(message).toBe("Not a valid email!")
})

test('All Fields are correcr', () => {
  render(<Login/>);
  const message = handleLogIn({email:"sebastian@globant.com",password:"contraseña"})
  expect(message).toBe("Logged in!")
})
