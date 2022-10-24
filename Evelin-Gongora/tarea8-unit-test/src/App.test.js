import { render, screen } from "@testing-library/react";
import App from "./App";
import { validateForm } from "./components/Login";

test("title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Login/i);
  expect(titleElement).toBeInTheDocument();
});

test("Existe una entrada de correo electrónico", () => {
  render(<App />);
  const input = screen.getByText(/email/i);
  expect(input).toBeInTheDocument();
});

test("La entrada de la contraseña existe", () => {
  render(<App />);
  const pass = screen.getByLabelText(/password/i);
  expect(pass).toBeInTheDocument();
});

test("El botón existe", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Iniciar sesion/i });
  expect(button).toBeInTheDocument();
});

test("Información correcta", () => {
  const testData = { email: "f.gongoraandrade@gmail.com", password: "admin12345" };
  const result = validateForm(testData);
  console.log(result);
  expect(result).toBe("Hola! lo hiciste bien.");
});

test("Información incorrecta", () => {
  const testData = { email: "f.gongoraandrade@gmail.com", password: "j&e0629" };
  const result = validateForm(testData);
  console.log(result);
  expect(result).toBe("Uno de los campos es incorrecto");
});

test("No hay información suministrada", () => {
  const testData = { email: "", password: "" };
  const result = validateForm(testData);
  console.log(result);
  expect(result).toBe("Campos vacios");
});
