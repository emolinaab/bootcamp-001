import React from 'react';
import {LoginForm} from './components/LoginForm';
export function verifyLogin(details, userAdmitted){
  if(details.username === userAdmitted.user && details.password === userAdmitted.password){
    return "Logged in";
  }else if((details.username === ''|| details.password === '') || (details.username === undefined|| details.password === undefined)){
    return "You need to complete all the fields";
  }else{
    return "User name or password invalid";
  }
}
function App() {
  const userAdmitted = {
    user: 'admin',
    password: '123456'
  }
  const Login = details =>{
    console.log(details);
    alert(verifyLogin(details,userAdmitted));
  }
  return (
    <div className="App">
      <h1>Sign In</h1>
      <LoginForm Login={Login}/>
    </div>
  );
}
export default App;
