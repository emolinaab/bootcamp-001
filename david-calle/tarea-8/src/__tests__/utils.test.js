import { checkValidAccount, signIn } from "../utils";

test("checkValidAccount checks correctly if the username and password are valid", () => {
  const validUsername = "DavidCalleg1";
  const validPassword = "Qeop123_qwe";
  const result = checkValidAccount(validUsername, validPassword);
  expect(result).toBeTruthy();
});

test("checkValidAccount returns false if username is invalid", () => {
  const invalidUsername = "_dc";
  const validPassword = "132145asda";
  const result = checkValidAccount(invalidUsername, validPassword);
  expect(result).toBeFalsy();
});

test("checkValidAccount returns false if password is invalid", () => {
  const validUsername = "Hernan_122";
  const invalidPassword = "q1";
  const result = checkValidAccount(validUsername, invalidPassword);
  expect(result).toBeFalsy();
});

test("signIn works correctly for a registered user", async () => {
  const correctUsername = "juanchoman1";
  const correctPassword = "Qweop_123";
  await expect(signIn(correctUsername, correctPassword)).resolves.toEqual(true);
});

test("signIn rejects for an unregistered user", async () => {
  const unregisteredUsername = "DHenaoo1";
  const password = "12345678*";
  await expect(signIn(unregisteredUsername, password)).rejects.toThrow(Error);
});

test("signIn rejects if password is not valid", async () => {
  const validUsername = "user_12324";
  const invalidPassword = "132";
  await expect(signIn(validUsername, invalidPassword)).rejects.toThrow(Error);
});

test("signIn rejects if username is not valid", async () => {
  const invalidUsername = "usr";
  const validPassword = "132234587";
  await expect(signIn(invalidUsername, validPassword)).rejects.toThrow(Error);
});
