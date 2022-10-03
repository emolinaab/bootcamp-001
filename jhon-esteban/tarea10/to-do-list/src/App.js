import './App.css';
import Checkbox from './components/Checkbox';
import List from './components/List';
import PrincipalForm from './components/PrincipalForm';
import Container from './components/Container';


function App() {
  return (
   <Container>
      <PrincipalForm />
      <List />
      <Checkbox/>
    </Container>
  );
}

export default App;
