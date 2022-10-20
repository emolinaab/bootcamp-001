import { act, renderHook } from "@testing-library/react";
import useForm from "../../src/utils/useForm";

describe("Testing useForm", () => {
  const initialForm = { email: "", password: "" };
  const newForm = { email: "daritza@uninorte.edu.co", password: "Lio4-t?rfh1" };

  test("Must return default values", () => {
    const { result } = renderHook(() => useForm());
    const { formState, onInputChange, resetSignIn } = result.current;

    expect(formState).toEqual(initialForm);
    expect(onInputChange).toEqual(expect.any(Function));
    expect(resetSignIn).toEqual(expect.any(Function));
  });

  test("Must change email field from form", () => {
    const { result } = renderHook(() => useForm());
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { type: "email", value: newForm.email } });
    });
    expect(result.current.formState.email).toBe(newForm.email);
  });

  test("Must change password field from form", () => {
    const { result } = renderHook(() => useForm());
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({ target: { type: "password", value: newForm.password } });
    });
    expect(result.current.formState.password).toBe(newForm.password);
  });

  test("Must reset form", () => {
    const { result } = renderHook(() => useForm());
    const { onInputChange, resetSignIn } = result.current;

    act(() => {
      onInputChange({ target: { type: "email", value: newForm.email } });
      resetSignIn();
    });

    expect(result.current.formState).toStrictEqual(initialForm);
  });
});
