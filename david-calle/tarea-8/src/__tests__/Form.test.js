import {
  fireEvent,
  render,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import Form from "../components/Form";

let signInButton = null;
let usernameInput = null;
let passwordInput = null;
let container = null;

beforeEach(() => {
  ({ container } = render(<Form />));
  signInButton = screen.getByText(/Sign In/i, { selector: "input" });
  usernameInput = screen.getByLabelText(/Username/i, {
    selector: "input",
  });
  passwordInput = screen.getByLabelText(/Password/i, {
    selector: "input",
  });
});

afterEach(() => {
  signInButton = null;
  usernameInput = null;
  passwordInput = null;
  container = null;
  cleanup();
});

it("keeps sign in button disabled if username or password are not valid", () => {
  const invalidUsername = "Dcg";
  const invalidPassword = "qwe123";
  fireEvent.change(usernameInput, { target: { value: invalidUsername } });
  fireEvent.change(passwordInput, { target: { value: invalidPassword } });
  expect(signInButton.disabled).toBeTruthy();
});

it("enables sign in button if username and password are valid", () => {
  const validUsername = "Davidcalle1";
  const validPassword = "Queop_123";
  fireEvent.change(usernameInput, { target: { value: validUsername } });
  fireEvent.change(passwordInput, { target: { value: validPassword } });
  expect(signInButton.disabled).toBeFalsy();
});

it("shows the logged in message if user has successfully logged in", async () => {
  const correctUsername = "juanchoman1";
  const correctPassword = "Qweop_123";
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
  const incorrectUsername = "testUser1";
  const correctPassword = "Qweop_123";
  fireEvent.change(usernameInput, { target: { value: incorrectUsername } });
  fireEvent.change(passwordInput, { target: { value: correctPassword } });
  fireEvent.click(signInButton);
  await waitFor(() =>
    expect(container.getElementsByClassName("error")[0]).toBeInTheDocument()
  );
});
