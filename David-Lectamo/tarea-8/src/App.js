import './App.css';
import LoginForm from './components/Login';

function App() {
  const Login = details => {
    console.log(details);
    verify (details);
  }

  return (
    <LoginForm Login={Login}/>
  );
}

export default App;

export function verify (details) {
  if(details !== null && details !== undefined &&
    details.user !== undefined && details.password !== undefined &&
    details.user !== null && details.password !== null && 
    details.user === 'admin' && details.password === '1234') {
      alert('Signed in');
      return true;
  } else {
    alert('Error to Sign in, user or password are incorrect');
    return false;
  }
}