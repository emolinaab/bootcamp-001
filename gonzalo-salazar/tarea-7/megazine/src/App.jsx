import { Image } from "./components/nba-image/image";
import { Header } from "./components/header/header";
import { Info } from "./components/information/info";
import { Footer } from "./components/footer/footer";

const App = () => {
  return (
    <main className="main-container">
      <Header />
      <Image />
      <Info />
      <Footer />
    </main>
  );
};

export default App;
