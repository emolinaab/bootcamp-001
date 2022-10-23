import "./App.css";
import image from "./resources/code.jpg";

function App() {
  return (
    <main>
      <article>
        <section>
          <section class="container">
            <section class="container-child">
              <hgroup>
                <section class="container-header">
                  <h2 class="phrase">
                    THE FASHION ISSUE - GUEST EDITOR CHIARA SCELSI
                  </h2>
                  <h1 class="title">L'OFFICIEL</h1>
                </section>
                <section class="container-italia">
                  <h3 class="italia">ITALIA</h3>
                </section>
              </hgroup>
              <section class="container-date">
                <h4 class="date">N° 32 - FEBBRAIO 2020</h4>
              </section>
              <section class="container-editor">
                <h4 class="editor">DE LA COUTURE ET DE LA MODE DE PARIS</h4>
              </section>
              <strong>
                <section class="container-theme">
                  <h5 class="theme-title">CAST</h5>
                  <p class="name">
                    Monica Bellucci <br></br> Any Taylor-Joy <br></br> Chiara
                    Scelsi
                  </p>
                </section>
                <section class="container-theme-2">
                  <h6 class="theme-2-title">UNIQUE</h6>
                  <h6 class="theme-2">MUSE</h6>
                  <h6 class="name-2">Paris</h6>
                  <h6 class="name-3">Jackson</h6>
                  <hr></hr>
                  <p class="author">
                    SAINT LAURENT <br></br> BY ANTHONY VACCARELLO
                  </p>
                </section>
                <section class="container-code">
                  <img src={image} alt="Código de barras" class="img-code" />
                </section>
              </strong>
            </section>
          </section>
        </section>
      </article>
    </main>
  );
}

export default App;
