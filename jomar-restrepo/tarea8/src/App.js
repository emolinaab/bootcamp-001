import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div class="signupFrm">
    <form action="" class="form">
      <h1 class="title">Sign in</h1>
      

      <div class="inputContainer">
        <Input></Input>
        <Label text={"Username"}></Label>
      </div>

      <div class="inputContainer">
        <Input></Input>
        <Label text={"Password"}></Label>
      </div>

      <Button value={"Sing in"}></Button>
      <div class="pass">
        <Paragraph text={"Forgot Password?"}></Paragraph>
      </div>
  
    <Button value={"Sing up"}></Button>
      
    </form>
  </div>
  );
}

export default App;

