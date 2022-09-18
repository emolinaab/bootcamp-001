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

function App() {
  return (
    <main className="main__magazine">
      <span
        className="edition__details"
        title="Edition: Sept. 4, 2022 - Ed. 47"
      >
        Sept. 4, 2022 - Ed. 42
      </span>
      <header className="header">
        <h1 title="Checkered flag" className="header__magazine-title">
          <span>checkered</span>
          <span>flag</span>
        </h1>
      </header>
      <img
        src={coverImage}
        title="Oscar Piastri"
        className="img__magazine-cover"
        alt="Oscar Piastri"
      />
      <section className="section__grid">
        <MainArticle {...mainArticle} />
        <SupportingArticles articles={supportingArticles} />
        <footer className="footer__barcode">
          <img
            className="img__barcode-img"
            src={barcodeImage}
            alt="Magazine barcode"
          />
        </footer>
        <footer className="footer__third-article">
          <h1>The Rumor...</h1>
          <p>Gasly in talks with Alpine for next year.</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
