import {fireEvent, getByTestId, render, screen } from '@testing-library/react';
import App from './App';

test("check Label", ()=>{
  render(<App/>);
  const label= screen.getByText(/User Name/i);
  expect(label).toBeInTheDocument();
})

test("check Password", ()=>{
  render(<App/>);
  const password= screen.getByText(/Password/i);
  expect(password).toBeInTheDocument();
})

test("check data", ()=>{
  const userName="karen"
  const password="1234"

  render(<App/>)

  const inputUserName= screen.getByPlaceholderText(/userName/i)
  const inputPassword= screen.getByPlaceholderText(/password/i)
  const form = screen.getByRole("form")

  fireEvent.input(inputUserName,{target:{value:userName}})
  fireEvent.input(inputPassword,{target:{value:password}})
  fireEvent.submit(form);

  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument
  
})


test("check error data", ()=>{
  const userName="manu"
  const password="1234"

  render(<App/>)

  const inputUserName= screen.getByPlaceholderText(/userName/i)
  const inputPassword= screen.getByPlaceholderText(/password/i)
  const form = screen.getByRole("form")

  fireEvent.input(inputUserName,{target:{value:userName}})
  fireEvent.input(inputPassword,{target:{value:password}})
  fireEvent.submit(form);

  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument
  
})


test("check empty data", ()=>{
  const userName=""
  const password=""

  render(<App/>)

  const inputUserName= screen.getByPlaceholderText(/userName/i)
  const inputPassword= screen.getByPlaceholderText(/password/i)
  const form = screen.getByRole("form")

  fireEvent.input(inputUserName,{target:{value:userName}})
  fireEvent.input(inputPassword,{target:{value:password}})
  fireEvent.submit(form);

  const button = screen.getByRole("button")
  expect(button).toBeInTheDocument
  
})