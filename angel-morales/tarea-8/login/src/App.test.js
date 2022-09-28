import { render, screen } from "@testing-library/react";
import App from "./App";
import { validateForm } from "./components/loginForm/Login";

test("title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Login/i);
  expect(titleElement).toBeInTheDocument();
});

test("e-mail entry exists", () => {
  render(<App />);
  const input = screen.getByText(/email/i);
  expect(input).toBeInTheDocument();
});

test("password entry exists", () => {
  render(<App />);
  const pass = screen.getByLabelText(/password/i);
  expect(pass).toBeInTheDocument();
});

test("button exists", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /SIGN IN/i });
  expect(button).toBeInTheDocument();
});

test("correct data", () => {
  const testData = { email: "angel@gmail.com", password: "1234567" };
  const result = validateForm(testData);
  console.log(result);
  expect(result).toBe("Welcome");
});

test("incorrect data", () => {
  const testData = { email: "angel@gmail.com", password: "123sdsdsd4567" };
  const result = validateForm(testData);
  console.log(result);
  expect(result).toBe("One of the fields is incorrect");
});

test("No data entry", () => {
  const testData = { email: "", password: "" };
  const result = validateForm(testData);
  console.log(result);
  expect(result).toBe("Fields are empty");
});
