import './box.css';
import './flex.css';
import './styles.css';

function App() {
  return (
    <article class="app">
      <header>
        <h1 id="main-title" class="heading">ELLE</h1>
      </header>
      <section id="flex-direction">
          <article class="flex-container flex-col flex-small">
            <span>METAVERSO</span>
            <span>BLOCKCHAIN</span>
            <span>CRIPTOMONEDAS</span>
          </article>
        <article class="flex-container flex-col flex-super-small flex-normal-letter blue">
          <span>LO VIRTUAL</span>
          <span>ES TENDENCIA</span>
        </article>
        <article class="flex-container flex-col flex-super-small red flex-big-letter">
          <span>MODA</span>
        </article>
        <article class="flex-container flex-col flex-small blue flex-normal-letter">
          <span>AVANCE DE</span>
          <span>TEMPORADA</span>
        </article>
        <article class="flex-container flex-col flex-normal-letter">
          <span>TE DECIMOS</span>
          <span>LO QUE VAS</span>
          <span>A (QUERER)</span>
          <span>LLEVAR</span>
        </article>
        <article class="flex-container flex-col flex-super-small red">
            <span>BELLEZA</span>
        </article>
        <article class="flex-container flex-col flex-normal-letter blue">
            <span>EL SHOPPING</span>
            <span>IMPRESCINDIBLE</span>
            <span>DE LAS EDITORAS</span>
            <span>BEAUTY DE ELLE</span>
        </article>
        <article class="flex-container flex-col flex-small blue">
              <span>PLANAZOS</span>
              <span>URBANOS</span>
        </article>
      </section>
      <section class="box-sizing-container white">
        <span>UNA
        <article id="diferent-size">MIRADA</article>AL
        <article id="diferent-size">FUTURO</article>
        </span>
      </section>
      <section class="flex-container red">
        <em>BARBARA PALVIN</em>
      </section>
    </article>
  );
}

export default App;
