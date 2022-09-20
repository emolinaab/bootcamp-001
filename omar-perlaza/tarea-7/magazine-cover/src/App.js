import './css/styles.css';
import './images/curry.png';


function App() {
  return (
    <div >
       <main className="container">
        <article>
          <header>
            <div><h1 className="title">SLAM</h1></div>
          </header>
          <section>
            <img src={require("./images/curry.png")} alt="" />
            <section className="container-p">
              <p>
                El mejor tirador del siglo XXI, y para muchos de la historia, es
                el señor Stephen Curry. El ícono de Golden State Warriors
                revolucionó un poco este deporte con su tiro y lleva 3.102
                triples anotados en 822 partidos para un promedio de 3,8
                convertidos por partido.
              </p>
            </section>
            <section className="container-p2">
              <p>
                Tiene un 42,8% de acierto a lo largo de su carrera que es brutal
                para sus más de 7.200 lanzamientos intentados. El 7 de noviembre
                de 2016 encestó 13 triples en un partido frente a New Orleans
                Pelicans. Fue récord y luego lo superó su compañero Klay
                Thompson con 14 en 2018.
              </p>
            </section>
            <section className="container-h2">
              <h2>Stephen Curry</h2>
            </section>
          </section>
        </article>
      </main> 
    </div>
  );
}

export default App;
