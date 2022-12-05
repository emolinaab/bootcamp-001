import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("check the title ", () => {
  render(<App />);
  const title = screen.getByText(/Sign in/i);
  expect(title).toBeInTheDocument();
});

test("validation of data correct", () => {
  const userName = "jomar2030@hotmail.com";
  const password = "1234";
  render(<App />);
  const inputUsername = screen.getByPlaceholderText("enter your email");
  const inputPassword = screen.getByPlaceholderText("password");
  const form = screen.getByRole("form");
  fireEvent.input(inputUsername, { target: { value: userName } });
  fireEvent.input(inputPassword, { target: { value: password } });
  fireEvent.submit(form);
  const exitOnsend = screen.getByText(/Sign up/i);
  expect(exitOnsend).toBeInTheDocument();
});

test("validation of data incorrect", () => {
  const userName = "jomar20@hotmail.com";
  const password = "123445";
  render(<App />);
  const inputUsername = screen.getByPlaceholderText("enter your email");
  const inputPassword = screen.getByPlaceholderText("password");
  const form = screen.getByRole("form");
  fireEvent.input(inputUsername, { target: { value: userName } });
  fireEvent.input(inputPassword, { target: { value: password } });
  fireEvent.submit(form);
  const exitOnsend = screen.getByText(/Sign up/i);
  expect(exitOnsend).toBeInTheDocument();
});

test("validation of data empty", () => {
  const userName = "";
  const password = "";
  render(<App />);
  const inputUsername = screen.getByPlaceholderText("enter your email");
  const inputPassword = screen.getByPlaceholderText("password");
  const form = screen.getByRole("form");
  fireEvent.input(inputUsername, { target: { value: userName } });
  fireEvent.input(inputPassword, { target: { value: password } });
  const exitOnsend = screen.getByText(/Sign up/i);
  expect(exitOnsend).toBeInTheDocument();
  fireEvent.submit(form);
});
