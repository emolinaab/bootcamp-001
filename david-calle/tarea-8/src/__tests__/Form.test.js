import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "../components/Form";

it("keeps sign in button disabled if username or password are not valid", () => {
  render(<Form />);
  const signInButton = screen.getByText(/Sign In/i, { selector: "input" });
  const usernameInput = screen.getByLabelText(/Username/i, {
    selector: "input",
  });
  const passwordInput = screen.getByLabelText(/Password/i, {
    selector: "input",
  });
  fireEvent.change(usernameInput, { target: { value: "Dcg" } });
  fireEvent.change(passwordInput, { target: { value: "qwe123" } });
  expect(signInButton.disabled).toBeTruthy();
});

it("enables sign in button if username and password are valid", () => {
  render(<Form />);
  const signInButton = screen.getByText(/Sign In/i, { selector: "input" });
  const usernameInput = screen.getByLabelText(/Username/i, {
    selector: "input",
  });
  const passwordInput = screen.getByLabelText(/Password/i, {
    selector: "input",
  });
  fireEvent.change(usernameInput, { target: { value: "Davidcalle1" } });
  fireEvent.change(passwordInput, { target: { value: "Queop_123" } });
  expect(signInButton.disabled).toBeFalsy();
});

it("shows the logged in message if user has successfully logged in", async () => {
  render(<Form />);
  const correctUsername = "juanchoman1";
  const correctPassword = "Qweop_123";
  const signInButton = screen.getByText(/Sign In/i, { selector: "input" });
  const usernameInput = screen.getByLabelText(/Username/i, {
    selector: "input",
  });
  const passwordInput = screen.getByLabelText(/Password/i, {
    selector: "input",
  });
  fireEvent.change(usernameInput, { target: { value: correctUsername } });
  fireEvent.change(passwordInput, { target: { value: correctPassword } });
  fireEvent.click(signInButton);
  await waitFor(() =>
    expect(
      screen.getByText(/You've successfully logged in/i)
    ).toBeInTheDocument()
  );
});

it("shows an error message if username or password are incorrect", async () => {
  const { container } = render(<Form />);
  const incorrectUsername = "testUser1";
  const correctPassword = "Qweop_123";
  const signInButton = screen.getByText(/Sign In/i, { selector: "input" });
  const usernameInput = screen.getByLabelText(/Username/i, {
    selector: "input",
  });
  const passwordInput = screen.getByLabelText(/Password/i, {
    selector: "input",
  });
  fireEvent.change(usernameInput, { target: { value: incorrectUsername } });
  fireEvent.change(passwordInput, { target: { value: correctPassword } });
  fireEvent.click(signInButton);
  await waitFor(() =>
    expect(container.getElementsByClassName("error")[0]).toBeInTheDocument()
  );
});
