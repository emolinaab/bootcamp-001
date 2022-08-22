import './App.css';
import logo from './images/Logo.png';
import Driver from './components/Driver.js';
import code from './images/code.png';
import car from './images/car.jpg';
import schumacher from './images/schumacher.png';

function App() {
  return (
    <div className = 'background'>
      <div className="App">
        <div className = 'general-title'> 
          <p>LA REVISTA ESPA&Ntilde;OLA CIEN POR CIEN DE F&Oacute;RMULA 1</p>
        </div>

        <div className='schumachercontainer'>
          <img className = 'schumacher'
            src = {schumacher}
            alt = 'schumacher' />
        </div>

        <div className = 'grid'>
          <div className = 'left'>
            <div className = "f1-logo">
              <img className = 'logo'
                src = {logo}
                alt = 'logo' />
            </div>
            <div className = 'driverquestion'>
              <Driver
                name = 'Ralf Schumacher'
                question = '¿Puede doblegar a Montoya y luchar por el titulo?'
              />
              <Driver
                name = 'Carlos Reutemann'
                question = 'La historia in&eacute;dita del gran enigma de la F&oacute;rmula 1'
              />
              <Driver
                name = 'Mika Hakkinen'
                question = 'Desciframos lo que hay detr&aacute;s de su retirada'
              />
            </div>
          </div>

          <div className = 'right'>
            <div className = 'text-50years'>
              <h3>50 A&Ntilde;OS DE CAMPEONES</h3>
            </div>
            <div className = "title">
              <h1>¿QUI&Eacute;N ES EL MEJOR?</h1>
            </div>
            <p className = 'comparation'>¿SCHUMACHER, SENNA, FANGIO O... CLARK?</p>
            <p className = 'oriol'>ORIOL SERVIA</p>
            <p className = 'cart'>
              <strong>Entre la CART y el cielo</strong>
            </p>
          </div>

          <div className = 'empty'>
          </div>
        </div>

        

        <div className = 'codecontainer'>
          <img className = 'code'
            src = {code}
            alt = 'code' />
        </div>
        <div className = 'carcontainer'>
          <img className = 'car'
            src = {car}
            alt = 'car' />
        </div>

        <div className = 'bottompanel'>
          <h2>Text</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
