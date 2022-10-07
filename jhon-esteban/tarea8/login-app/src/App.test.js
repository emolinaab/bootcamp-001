import { fireEvent,render, screen } from '@testing-library/react';
import App from './App';

test("check the principalTittle", () =>{
  render(<App/>)
  const principalTittle = screen.getByText(/Please Sign In/i)
  expect(principalTittle).toBeInTheDocument()
})

test("Validation of data", () =>{
  const userName = "jhon.esteban@gmail.com"
  const password = "12345"

  render(<App/>)
  const inputUserName = screen.getByPlaceholderText(/example@gmail.com/i)
  const inputPassword = screen.getByPlaceholderText(/Enter your password/i)
  const form = screen.getByRole("form")

  fireEvent.input(inputUserName, {target: {value:userName}})
  fireEvent.input(inputPassword, {target: {value:password}})
  fireEvent.submit(form)

  const button= screen.getByText(/Log in/i);
  expect(button).toBeInTheDocument()
})

test("Validation of incorrect data", () =>{
  const userName = "jhon@hotmail.com"
  const password = "0987654"

  render(<App/>)
  const inputUserName = screen.getByPlaceholderText(/example@gmail.com/i)
  const inputPassword = screen.getByPlaceholderText(/Enter your password/i)
  const form = screen.getByRole("form")

  fireEvent.input(inputUserName, {target: {value:userName}})
  fireEvent.input(inputPassword, {target: {value:password}})
  fireEvent.submit(form)

  const button= screen.getByText(/Log in/i);
  expect(button).toBeInTheDocument()
})

test("Validation of empty data form", () =>{
  const userName = ""
  const password = ""

  render(<App/>)
  const inputUserName = screen.getByPlaceholderText(/example@gmail.com/i)
  const inputPassword = screen.getByPlaceholderText(/Enter your password/i)
  const form = screen.getByRole("form")

  fireEvent.input(inputUserName, {target: {value:userName}})
  fireEvent.input(inputPassword, {target: {value:password}})
  fireEvent.submit(form)

  const button= screen.getByText(/Log in/i);
  expect(button).toBeInTheDocument()
})