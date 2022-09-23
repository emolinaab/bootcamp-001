import { render, screen } from '@testing-library/react';
import { Login } from './components/Login';
import { SignIn } from './components/Login';


let usu, usup;
test('All fields are empty', () => {
  render(<Login />);
  usu='';
  usup='';
  const result = SignIn(usu, usup);
  expect(result).toBe("Complete the rest of the fields");
});
test('Only password is empty', () => {
  render(<Login />);
  usu="admin";
  usup='';
  const result = SignIn(usu, usup);
  expect(result).toBe("Complete the rest of the fields");
});
test('Only user is empty', () => {
  render(<Login />);
  usu='';
  usup="123456";
  const result = SignIn(usu, usup);
  expect(result).toBe("Complete the rest of the fields");
});
test('All fields are correct test 1', () => {
  render(<Login />);
  usu="admin";
  usup="1234";
  const result = SignIn(usu, usup);
  expect(result).toBe("You are inside");
});

test('All fields are correct test 2', () => {
  render(<Login />);
  usu="admin113";
  usup="123456";
  const result = SignIn(usu, usup);
  expect(result).toBe("You are inside");
});

test('All fields are correct test 3', () => {
  render(<Login />);
  usu="usuario";
  usup="contrasenia";
  const result = SignIn(usu, usup);
  expect(result).toBe("You are inside");
});

test('Nothing is correct', () => {
  render(<Login />);
  usu="rgregeg";
  usup="ge23a";
  const result = SignIn(usu, usup);
  expect(result).toBe("The data are wrong");
});