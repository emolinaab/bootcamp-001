import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "../../src/components/Form";

describe("Testing in <Form />", () => {
  const newForm = { email: "daritza@uninorte.edu.co", password: "Lio4-t?rfh1" };

  test("Should show the component correctly ", () => {
    render(<Form />);
    const emailField = screen.getByRole("textbox", { type: "email" });
    const passwordField = screen.queryByLabelText("password");

    expect(passwordField).toBeTruthy();
    expect(emailField).toBeTruthy();
  });

  test("Should change the textbox value", () => {
    render(<Form />);
    const emailField = screen.getByRole("textbox", { type: "email" });
    const passwordField = screen.queryByLabelText("password");

    fireEvent.input(passwordField, { target: { value: newForm.password } });
    fireEvent.input(emailField, { target: { value: newForm.email } });

    expect(emailField.value).toBe(newForm.email);
    expect(passwordField.value).toBe(newForm.password);
  });

  test("Should call validateSubmit when click LOGIN", () => {
    const validateSubmit = jest.fn();
    render(<Form vSubmit={validateSubmit} />);
    fireEvent.click(screen.getByRole("button"));
    expect(validateSubmit).toHaveBeenCalled();
  });

  test("Should clean the Textfield if the User is valid", () => {
    render(<Form />);
    const emailField = screen.getByRole("textbox", { type: "email" });
    const passwordField = screen.queryByLabelText("password");

    fireEvent.input(passwordField, { target: { value: newForm.password } });
    fireEvent.input(emailField, { target: { value: newForm.email } });
    fireEvent.click(screen.getByRole("button"));

    expect(passwordField.value).toBe("");
    expect(emailField.value).toBe("");
  });
});
