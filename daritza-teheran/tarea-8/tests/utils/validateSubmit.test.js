import validateSubmit from "../../src/utils/validateSubmit";

describe("Testing in validateSubmit()", () => {
  
  const invalidEmail = ["fran @ outcom ", "@.es", "oyaga1@." , "franoutlookes", "elian@ok.es hola"];
  const invalidPassword = [ "YL123l10", "We1? *2le", "162l","r45tgalH", " 1111hhhh_" ];
  const validEmail = ["fran@out.com", "nosu1@hotmail.es", "oyaga1@ok.ru", "fran@outlook.es", "elian@ok.ru"];
  const validPassword = [ "YL_123#l10", "We1?*2le", "162lH@tysa", "r45tgalH_", "1111hhhh_H"];
  

  test("Must return: Email is required", () => {
    validPassword.map((pswrd) => {
      const msg = validateSubmit({email:"", password:pswrd});
      expect(msg).toBe("Email is required!");
    });
  });

  test("Must return: Password is required", () => {
    invalidEmail.map((eml) => {
      const msg = validateSubmit({email:eml, password:""});
      expect(msg).toBe("Password is required!");
    });
  });

  test("Must return: Not valid email", () => {
    invalidEmail.map((eml,i) => {
      const msg = validateSubmit({email:eml, password:validPassword[i]});
      expect(msg).toBe("Not a valid email!");
    });
  });

  test("Must return: Not valid password", () => {
    invalidPassword.map((pswrd,i) => {
      const msg = validateSubmit({email:validEmail[i], password:pswrd});
      expect(msg).toBe("Not a valid password!");
    });
  });

  test("Must return: Succesfully log in!", () => {
    validPassword.map((pswrd,i) => {
      const msg = validateSubmit({email:validEmail[i], password:pswrd});
      expect(msg).toBe("Succesfully log in!");
    });
  });
});
