import "./App.css";
import { Header } from "./components/header/header";
import { Article } from "./components/information/article";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <main className="container">
      <Header />
      <Article />
      <Footer />
    </main>
  );
}

export default App;
