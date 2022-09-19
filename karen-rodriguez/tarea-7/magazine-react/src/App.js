import './App.css';
import Below from './components/Below';
import Finish from './components/Finish';
import Left from './components/Left';
import Right from './components/Right';
import fotoBritney from "../src/assets/img/britney2.png"

function App() {
  return (
    <main className="magazineCover">
      <section className="tittle textColour">ELLE</section>
        <figure>
          <img id="fotoBritney" src={fotoBritney} alt="britney photo" srcset=""/>
        </figure>
        
       
        <section aria-label="magazine cover content" className="content">
          <Left/>
          <Right/>
          <Below/>
          <Finish/>
      </section>
    </main>
  );
}

export default App;
