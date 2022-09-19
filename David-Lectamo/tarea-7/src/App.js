import './styles.css';
import './grid.css';
import './images.css';
import './images/Logo.png';

function App() {
  return (
    <main>
      <article class = 'background'>
        <section class="app">
          <header class = 'general-title'> 
            <p>LA REVISTA ESPA&Ntilde;OLA CIEN POR CIEN DE F&Oacute;RMULA 1</p>
          </header>

          <div class = 'grid'>
            <section class = 'left'>
              <figure class = "f1-logo">
                <img class = 'logo'
                  src = {require('./images/Logo.png')}
                  alt = 'logo' />
              </figure>

              <div class = 'driverquestion'>
                <p class = 'ralf'>
                  <strong>Ralf Schumacher</strong>
                </p>
                <p class = 'ralfquestion'>
                  ¿Puede doblegar a Montoya y luchar por el titulo?
                </p>
                
                <p class = 'carlos'>
                  <strong>Carlos Reutemann</strong>
                </p>
                <p class = 'carlosquestion'>
                  La historia in&eacute;dita del gran enigma de la F&oacute;rmula 1
                </p>
                
                <p class = 'mika'>
                  <strong>Mika Hakkinen</strong>
                </p>
                <p class = 'mikaquestion'>
                  Desciframos lo que hay detr&aacute;s de su retirada
                </p>

                <h2 class = 'verticaltext'>
                  <strong>F1 RACING</strong>
                </h2>
              </div>
            </section>
    
            <section class = 'right'>
              <div class = 'text-50years'>
                <h3>50 A&Ntilde;OS DE CAMPEONES</h3>
              </div>
              <div class = "title">
                <h1>¿QUI&Eacute;N ES EL MEJOR?</h1>
              </div>
              <p class = 'comparation'>¿SCHUMACHER, SENNA, FANGIO O... CLARK?</p>
              <p class = 'oriol'>ORIOL SERVIA</p>
              <p class = 'cart'>
                <strong>Entre la CART y el cielo</strong>
              </p>
            </section>
    
            <section class = 'empty'>
            </section>
          </div>

          <section>
            <figure class = 'principalimage'>
              <img class = 'photo'
              src = {require('./images/photo.png')}
              alt = 'photo' />
            </figure>
          </section>

          <section>
            <figure class = 'codecontainer'>
              <img class = 'code'
                src = {require('./images/code.png')}
                alt = 'code' />
            </figure>
          </section>
          
          <section>
            <figure class = 'carcontainer'>
              <img class = 'car'
                src = {require('./images/car.jpg')}
                alt = 'car' />
            </figure>
          </section>
          
          <footer>
            <section class = 'bottompanel'>
              <div>
                <p class = 'footerTitle'>LA PRETEMPORADA 2002. A TODO GAS</p>
                <p class = 'footer'>AS&Iacute;  AFRONTA EL CIRCUIT DE CATALUNYA LOS TEST DE F1</p>
              </div>
            </section>
          </footer>
        </section>
      </article>
    </main>
  );
}

export default App;
