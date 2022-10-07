import './App.css';
import Background from './assests/Background.jpg';
import Header from './components/headerComponent';
import News from './components/newsComponent';
import Main from './components/mainComponent';
import Footer from './components/footerComponent';
import Title from './components/titleComponent';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
      <Header></Header>
      <Title></Title>
      <News></News>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
