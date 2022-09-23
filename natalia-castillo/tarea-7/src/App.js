import "./App.css";
import { Header } from "./components/header";
import { Articles } from "./components/articles";
import { Footer } from "./components/footer";

function App() {
  return (
    <main id="magazine-cover">
      <Header/>
      <Articles/>
      <Footer/>
    </main>
  );
}

export default App;
