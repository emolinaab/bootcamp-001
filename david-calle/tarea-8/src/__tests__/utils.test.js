import { checkValidAccount, signIn } from "../utils";

test("checkValidAccount checks correctly if the username and password are valid", () => {
  const validtUsername = "DavidCalleg1";
  const validtPassword = "Qeop123_qwe";
  const result = checkValidAccount(validtUsername, validtPassword);
  expect(result).toBeTruthy();
});

test("checkValidAccount returns false if username is invalid", () => {
  const invalidtUsername = "_dc";
  const validtPassword = "132145asda";
  const result = checkValidAccount(invalidtUsername, validtPassword);
  expect(result).toBeFalsy();
});

test("checkValidAccount returns false if password is invalid", () => {
  const validtUsername = "Hernan_122";
  const invalidtPassword = "q1";
  const result = checkValidAccount(validtUsername, invalidtPassword);
  expect(result).toBeFalsy();
});

test("signIn works correctly for a registered user", async () => {
  const correctUsername = "juanchoman1";
  const correctPassword = "Qweop_123";
  await expect(signIn(correctUsername, correctPassword)).resolves.toEqual(true);
});

test("signIn returns false for an unregistered user", async () => {
  const unregisteredUsername = "DHenaoo1";
  const password = "12345678*";
  await expect(signIn(unregisteredUsername, password)).rejects.toThrow(Error);
});

test("signIn returns false if password is not valid", async () => {
  const validUsername = "user_12324";
  const invalidPassword = "132";
  await expect(signIn(validUsername, invalidPassword)).rejects.toThrow(Error);
});

test("signIn returns false if username is not valid", async () => {
  const invalidUsername = "usr";
  const validPassword = "132234587";
  await expect(signIn(invalidUsername, validPassword)).rejects.toThrow(Error);
});
