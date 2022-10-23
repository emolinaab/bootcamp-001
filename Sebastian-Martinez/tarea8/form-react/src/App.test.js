import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders title Welcome", () => {
  render(<App />);
  const titleForm = screen.getByText(/Hello Again!/i);
  expect(titleForm).toBeInTheDocument();

  const textForm = screen.getByText(/Welcome back to our platform/i);
  expect(textForm).toBeInTheDocument();
});

test("should send the form if the data is correct", () => {
  const user = "jhsebas";
  const password = "12345";

  render(<App />);
  const inputUser = screen.getByPlaceholderText("Username");
  const inputPassword = screen.getByPlaceholderText("Password");
  const form = screen.getByRole("form");

  fireEvent.input(inputUser, { target: { value: user } });
  fireEvent.input(inputPassword, { target: { value: password } });

  fireEvent.submit(form);
  const successMessage = screen.getByText(/Successful login/i);
  expect(successMessage).toBeInTheDocument();
});

test("try to submit the form with invalid data", () => {
  const user = "jhsebassss";
  const password = "11111";

  render(<App />);
  const inputUser = screen.getByPlaceholderText("Username");
  const inputPassword = screen.getByPlaceholderText("Password");
  const form = screen.getByRole("form");

  fireEvent.input(inputUser, { target: { value: user } });
  fireEvent.input(inputPassword, { target: { value: password } });

  fireEvent.submit(form);
  const invalidMessage = screen.getByText(
    /Sorry, try again, the credentials are incorrect/i
  );
  expect(invalidMessage).toBeInTheDocument();
});

test("try to submit the form with empty inputs", () => {
  const user = "";
  const password = "";

  render(<App />);
  const inputUser = screen.getByPlaceholderText("Username");
  const inputPassword = screen.getByPlaceholderText("Password");
  const form = screen.getByRole("form");

  fireEvent.input(inputUser, { target: { value: user } });
  fireEvent.input(inputPassword, { target: { value: password } });

  fireEvent.submit(form);
  const emptyMessage = screen.getByText(/Please, fill the fields/i);
  expect(emptyMessage).toBeInTheDocument();
});
