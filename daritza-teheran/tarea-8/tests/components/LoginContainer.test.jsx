import { render, screen } from "@testing-library/react";
import { Form } from "../../src/components/Form";
import { LoginContainer } from "../../src/components/LoginContainer";

describe("Testing in <LoginContainer />", () => {
  const logCont = <LoginContainer children={<Form />} />;

  test("Should make match with snapshot", () => {
    const { container } = render(logCont);
    expect(container).toMatchSnapshot();
  });

  test("Should show the form", () => {
    render(logCont);
    expect(screen.getByTestId("form")).toBeTruthy();
  });
});
