import './App.css';
import dragonite from '../src/assets/img/dragonitepeque.png'
import PrincipalTitle from './components/PrincipalTitle';
import Label from './components/Label';
import Input from './components/Input';
import Button from './components/Button';

function App() {

  

  return (
    
    <section class="container">
      <form class="form-login">
        <PrincipalTitle tittle={"Please Sign In"}/>
          <div class="box">
            <div class="form-group">
              <Label label={"User Name"}/>
              <Input input={"email"}/>
            </div>
            <div class="form-group">
              <Label label={"Password"}/>
              <Input input={"password"}/>
            </div>
            <Button button={"loginbutton"} text={"Log in"}/>
              <a href="">Forgot Password?</a> 
            <div class="form-group">
              <Label label={"New User"}/>
              <Button button={"singupbutton"} text={"Sing up"}/>
              <img src={dragonite}></img>
            </div>  
          </div>
      </form>
    </section>

  );
}

export default App;
