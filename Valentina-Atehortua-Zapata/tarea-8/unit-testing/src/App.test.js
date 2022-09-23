import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("check the title ", () => {
  render(<App />);
  const title = screen.getByText(/Login/i);
  expect(title).toBeInTheDocument();
});
test("check the subtitle ", () => {
  render(<App />);
  const subtitle = screen.getByText(/Welcome, make your registration/i);
  expect(subtitle).toBeInTheDocument();
});

test("Validation of correct data entry", () => {
  const userName = "valen@gmail.com";
  const password = "1234";

  render(<App />);
  const inputUserName = screen.getByPlaceholderText("example@correo.com");
  const inputPassword = screen.getByPlaceholderText("Enter your password");
  const form = screen.getByRole("form");

  fireEvent.input(inputUserName, { target: { value: userName } });
  fireEvent.input(inputPassword, { target: { value: password } });

  fireEvent.submit(form);
  const buttonLogin = screen.getByText(/Sing In/i);
  expect(buttonLogin).toBeInTheDocument();
});

test("Validation of incorrect data entry", () => {
  const userName = "valentina@gmail.com";
  const password = "123456";

  render(<App />);
  const inputUserName = screen.getByPlaceholderText("example@correo.com");
  const inputPassword = screen.getByPlaceholderText("Enter your password");
  const form = screen.getByRole("form");

  fireEvent.input(inputUserName, { target: { value: userName } });
  fireEvent.input(inputPassword, { target: { value: password } });

  fireEvent.submit(form);
  const successfulEntry = screen.getByText(/Sing In/i);
  expect(successfulEntry).toBeInTheDocument();
});

test("Validation of empty inputs", () => {
  const userName = "";
  const password = "";

  render(<App />);
  const inputUserName = screen.getByPlaceholderText("example@correo.com");
  const inputPassword = screen.getByPlaceholderText("Enter your password");
  const form = screen.getByRole("form");

  fireEvent.input(inputUserName, { target: { value: userName } });
  fireEvent.input(inputPassword, { target: { value: password } });
  const successfulEntry = screen.getByText(/Sing In/i);
  expect(successfulEntry).toBeInTheDocument();
  fireEvent.submit(form);
});
