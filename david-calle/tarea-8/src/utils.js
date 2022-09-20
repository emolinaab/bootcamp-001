export const checkValidAccount = (username, password) => {
  if (username.length < 4) return false;
  if (password.length < 8) return false;
  return true;
};

export const signIn = async (username, password) => {
  const staticUsername = "juanchoman1";
  const staticPassword = "Qweop_123";
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!checkValidAccount(username, password))
        reject(new Error("username or password not valid"));
      if (username !== staticUsername || password !== staticPassword)
        reject(new Error("incorrect username or password"));
      resolve(true);
    }, 300);
  });

  return promise;
};
