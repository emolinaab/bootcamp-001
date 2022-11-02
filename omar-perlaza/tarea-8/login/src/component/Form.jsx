import React, { useState } from "react";

export function Form() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
 
  const changeUser = (e) => {
    setUser(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const login =(e) => {
    SignIn(user,password)
  }

  
  

  return (
    <section  className="App">
      <div className="container-principal">
        <div className="title">
          <h1>Login</h1>
        </div>
        <form onSubmit={login} className="content">
          <label>User</label>
          <input type="text" value={user} onChange={changeUser}></input>
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={changePassword}
          ></input>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
    
  );
}


export function SignIn(user,password)
  {
    
    var result = "";
    if (user.length === 0 || password.length === 0) {
      
      result = "all fields are required";
      alert(result)
      return result;
    } else {
      if (user == "admin" && password == 1234567) {
        result = "the user is correct";
        alert(result)
        return result;
      } else {
        result = "the user is incorrect";
        alert(result)
        return result;
      }
    }
  }



