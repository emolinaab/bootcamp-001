
import './App.css';
import CoverMagazineHeader from './components/headerComponent'
import CoverMagazineMain from './components/mainComponent';
import CoverMagazineFooter from './components/footerComponet';

function App() {
  return (
    <div className="App">
      <CoverMagazineHeader></CoverMagazineHeader>
      <CoverMagazineMain></CoverMagazineMain>
      <CoverMagazineFooter></CoverMagazineFooter>
      <img src='https://snipstock.com/assets/cdn/png/9fa3958aaa183ec0276b05e0adde89f5.png' alt="model" title="model" aria-labelledby="Model"></img>
    </div>
  );
}

export default App;
