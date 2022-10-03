import React, {useState} from 'react'
import TextIn from './TextIn';
import '../stylesheets/Login.css';

function Login({Login}) {
  const[details, setDetails] = useState({user:'', password:''});
  
  const submitHandler = e => {
    e.preventDefault();
    Login(details);  
  }

  return (
    <main>
      <article>
        <header className = 'title'> 
          <h1>Sign In</h1>
        </header>
        <form onSubmit={submitHandler}>  
          <div className='container'>
          <TextIn 
            name = 'Username'
            type = 'text' 
            onChange = {e => setDetails({...details, user: e.target.value})}
            value = {details.user} />
          <TextIn 
            name = 'Password'
            type = 'password'
            onChange = {e => setDetails({...details, password: e.target.value})}
            value = {details.password} />
          <button className='submit' type='submit'>Login</button>  
          </div>
        </form>
      </article>
    </main>
  )
}

export default Login
