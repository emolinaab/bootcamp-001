
import './App.css';
import {Postlist} from './component/Post';
import Menu from './component/Menu';
import HomeContent from './component/HomeContent';

function App() {
  return (
    <div className="App">
      <Menu/>
      <h1 className='home-title'>Home Page</h1>
      <section className='container-princial'>
      <HomeContent/>
      <Postlist />
      </section>
    </div>
  );
}

export default App;
