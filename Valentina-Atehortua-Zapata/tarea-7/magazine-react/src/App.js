import "./App.css";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="titles">
      <div className="bodyTitles">
        <Header />
        <Boxes />
        <Footer />
      </div>
    </main>
  );
}

export default App;
