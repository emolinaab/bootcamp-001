import './App.css';
import LoginForm from './components/Login';

function App() {
  const Login = details => {
    console.log(details);
    if(details.user !== undefined && details.password !== undefined &&
      details.user !== null && details.password !== null && 
      details.user === 'admin' && details.password === '1234') {
        console.log('Logged in');
    } else {
      console.log('Error to Sign in, user or password are incorrect');
    }
  }

  return (
    <LoginForm Login={Login}/>
  );
}

export default App;