import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders sign in form", () => {
  render(<App />);
  const formText = screen.getByText(/Sign In/i, { selector: "p" });
  expect(formText).toBeInTheDocument();
});
