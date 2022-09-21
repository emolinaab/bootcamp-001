import './App.css';
import TextIn from './components/TextIn';
import signIn from './components/Signin';

function App() {
  return (
    <main>
      <article>
        <header className = 'title'> 
          <h1>Login</h1>
        </header>
        <form>  
          <div className='container'>
            <TextIn 
              name = 'Username'
              type = 'text' />
            <TextIn 
            name = 'Password'
            type = 'password' />
            <button className='submit' type='submit' onClick={signIn(document.getElementById('text'), '1234')}>Sign in</button>  
          </div>
        </form>
      </article>
    </main>
  );
}

export default App;

