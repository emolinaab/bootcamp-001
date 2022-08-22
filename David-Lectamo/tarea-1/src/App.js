import './App.css';
import logo from './images/Logo.png';

function App() {
  return (
    <div className="App">
      <div className = 'general-title'> 
        <h2>LA REVISTA ESPA&Ntilde;OLA CIEN POR CIEN DE F&Oacute;RMULA 1</h2>
      </div>
      <div className = 'grid'>
        <div className = "f1-logo">
          <img className = 'logo'
            src = {logo}
            alt = 'logo' />
        </div>
        <div className = 'text-right'>
          <div className = 'text-50years'>
            <h3>50 A&Ntilde;OS DE CAMPEONES</h3>
          </div>
          <div className = "title">
            <h1>¿QUI&Eacute;N ES EL MEJOR?</h1>
          </div>
          <div className = 'comparation'>
            <h2>¿SCHUMACHER, SENNA, FANGIO O... CLARK?</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
