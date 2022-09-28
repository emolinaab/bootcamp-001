import React from 'react';
import {LoginForm} from './components/LoginForm';
export function verifyLogin(details, validUser){
  if(details.username === validUser.user && details.password === validUser.password){
    return "Logged ";
  }else if((details.username === ''|| details.password === '') || (details.username === undefined|| details.password === undefined)){
    return "you must complete all fields";
  }else{
    return "User name or password invalid";
  }
}
function App() {
  const validUser = {
    user: 'zuly12@gmail.com',
    password: '1234567'
  }
  const Login = details =>{
    console.log(details);
    alert(verifyLogin(details,validUser));
  }
  return (
    <div className="App">
      <LoginForm Login={Login}/>
    </div>
  );
};
export default App;
