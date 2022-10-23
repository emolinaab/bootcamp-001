import { render, screen } from '@testing-library/react';
import { Login } from './components/Login';
import { SignIn } from './components/Login';


let user, password;
test('All fields are empty', () => {
  render(<Login />);
  user='';
  password='';
  const result = SignIn(user, password);
  expect(result).toBe("Complete the rest of the fields");
});
test('Only password is empty', () => {
  render(<Login />);
  user="admin";
  password='';
  const result = SignIn(user, password);
  expect(result).toBe("Complete the rest of the fields");
});
test('Only user is empty', () => {
  render(<Login />);
  user='';
  password="123456";
  const result = SignIn(user, password);
  expect(result).toBe("Complete the rest of the fields");
});
test('All fields are correct test 1', () => {
  render(<Login />);
  user="admin";
  password="1234";
  const result = SignIn(user, password);
  expect(result).toBe("You are inside");
});

test('All fields are correct test 2', () => {
  render(<Login />);
  user="admin113";
  password="123456";
  const result = SignIn(user, password);
  expect(result).toBe("You are inside");
});

test('All fields are correct test 3', () => {
  render(<Login />);
  user="usuario";
  password="contrasenia";
  const result = SignIn(user, password);
  expect(result).toBe("You are inside");
});

test('Nothing is correct', () => {
  render(<Login />);
  user="rgregeg";
  password="ge23a";
  const result = SignIn(user, password);
  expect(result).toBe("The data are wrong");
});