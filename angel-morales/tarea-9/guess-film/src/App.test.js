import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("render title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Guess the film/i);
  expect(titleElement).toBeInTheDocument();
});

test("incorrect title", () => {
  const testData = {
    text: "hacker ningún sistema es seguro",
    message: "The name of the movie is incorrect 🙁",
  };
  render(<App />);
  const button = screen.getByRole("button", { name: /Send/i });

  const inputText = screen.getByLabelText("What movie is it?");
  userEvent.clear(inputText);
  userEvent.type(inputText, testData.text);
  userEvent.click(button);
  const messageError = screen.getByText(testData.message);
  expect(messageError).toBeInTheDocument();
});
