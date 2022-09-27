import React from 'react';
import './App.css';
import coverImage from './assets/oscar_piastri.webp';
import barcodeImage from './assets/sample_barcode.jpg';
import MainArticle from './components/MainArticle';
import SupportingArticles from './components/SupportingArticles';

const mainArticle = {
  heading: 'Oscar Piastri',
  subheading: 'Who is the new McLaren driver?',
  content:
    'The Australian promise talks about his expectations with the Woking-based team.',
};

const supportingArticles = [
  'Redbull ahead of Ferrari',
  'What to expect for Monza',
];

const today = new Date();
const formattedDate = today.toLocaleString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});
const randomEd = Math.floor(Math.random() * 100);

function App() {
  return (
    <main className="main__magazine">
      <span
        className="edition__details"
        title={formattedDate + ' - Ed. ' + randomEd}
      >
        <time dateTime={today.toISOString()}>{formattedDate}</time>
        {' - Ed. '}
        {randomEd}
      </span>
      <header className="header">
        <h1 title="Checkered flag" className="header__magazine-title">
          <span>checkered</span>
          <span>flag</span>
        </h1>
      </header>
      <figure className="fig__magazine-cover">
        <img
          className="img__magazine-cover"
          src={coverImage}
          title="Oscar Piastri"
          alt="Formula driver Oscar Piastri holding a helmet in a celebration pose"
          aria-describedby="main-article"
        />
      </figure>
      <section className="section__grid">
        <MainArticle {...mainArticle} />
        <SupportingArticles articles={supportingArticles} />
        <footer className="footer__third-article">
          <h3 className="title__third-article">
            <span>There is a new team in the paddock: Audi</span>
          </h3>
        </footer>
        <footer className="footer__barcode">
          <img
            className="img__barcode-img"
            src={barcodeImage}
            alt="Magazine barcode"
          />
        </footer>
        <footer className="footer__fourth-article">
          <h3>The Rumor...</h3>
          <p>Gasly in talks with Alpine for next year.</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
