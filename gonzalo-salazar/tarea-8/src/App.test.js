import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./components/form";

test("email input should be rendered", () => {
  render(<Form />);
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  expect(emailInput).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Form />);
  const passwordInput = screen.getByPlaceholderText(/Enter password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Form />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("email input should be empty", () => {
  render(<Form />);
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  expect(emailInput.value).toBe("");
});

test("password input should be empty", () => {
  render(<Form />);
  const passwordInputEl = screen.getByPlaceholderText(/Enter password/i);
  expect(passwordInputEl.value).toBe("");
});

test("button should be disabled", () => {
  render(<Form />);
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});

test("email input should change", () => {
  render(<Form />);
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  const testValue = "test";

  fireEvent.change(emailInput, { target: { value: testValue } });
  expect(emailInput.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Form />);
  const passwordInput = screen.getByPlaceholderText(/Enter password/i);
  const testValue = "test";

  fireEvent.change(passwordInput, { target: { value: testValue } });
  expect(passwordInput.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
  render(<Form />);
  const button = screen.getByRole("button");
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  const passwordInput = screen.getByPlaceholderText(/Enter password/i);

  const testValue = "test";

  fireEvent.change(emailInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });

  expect(button).not.toBeDisabled();
});
