const validateSubmit = ({ email, password }) => {
  const emailPattern = new RegExp("^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$");
  const passwordPattern = new RegExp("^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*_\n-]*[#?!@$%^&*_-]).{8,}");
  const spacePattern = new RegExp("^(?!.* )");

  let errMsg =
    email == ""
      ? "Email is required!"
      : password == ""
      ? "Password is required!"
      : !emailPattern.test(email)
      ? "Not a valid email!" 
      : !spacePattern.test(email)
      ? "Not a valid email!"
      : !passwordPattern.test(password)
      ? "Not a valid password!"
      : !spacePattern.test(password)
      ? "Not a valid password!"
      : "Succesfully log in!";

  return errMsg;
};

export default validateSubmit;
