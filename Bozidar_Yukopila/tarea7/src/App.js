
import './App.css';
import Magaziarticle from './components/Magaziarticle';
import Magaziaside from './components/Magaziaside';
import Magaziheader from './components/Magaziheader';
import Magazinefooter from './components/Magazifooter';
function App() {
  return (
    <main>
      <figure>
        <img className="background" tabindex="10" aria-label="The master chief on earth" src={require('./components/pictures/fondo.jpg')}/>
        </figure>
      <Magaziheader />
      <h3 className="halo" tabindex="3">HALO</h3>
      <h3 className="infinite" tabindex="4">INFINITE</h3>
      <Magaziaside />
      <Magaziarticle />
      <Magazinefooter />
      </main>
     
  );
}

export default App;
