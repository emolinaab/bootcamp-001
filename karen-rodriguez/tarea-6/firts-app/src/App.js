import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import Cards from './components/layout/Cards';
import css from './App.css'
function App() {
  return (
    <div>
      <Navbar/>
        <h1 style={css}>¡Bienvenido a las delicias!</h1>
       <Cards/>
    </div>
     
  );
}

export default App;
