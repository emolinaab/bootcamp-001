import './App.css';
import { SectionBackground } from './components/SectionBackground';
import { Date } from './components/Date';
import { Titleplay } from './components/Titleplay';
import  { Subtitle2 } from './components/Subtitle2';
import { Paragrahp } from './components/Paragrahp';
import Paragraph2 from './components/Paragraph2';
import Direction from './components/Direction';
import Subtitle from './components/Subtitle';



function App() {
  return (
    <main>
      <SectionBackground>       
      <section className='title'>
      <Subtitle />
      <Date />
      </section>
      
      <Titleplay />
      <section>
      <Subtitle2>
      <Paragrahp />      
      <Paragraph2 />      
      <Direction />        
      </Subtitle2>
     
      </section>
     
      </SectionBackground>
                 
    </main>
  );
}

export default App;
