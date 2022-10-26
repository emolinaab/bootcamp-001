import { Image } from "./components/main-image/image";
import { Header } from "./components/header/header";
import { Information } from "./components/information/information";
import { Footer } from "./components/footer/footer";
import { useState } from "react";

const App = () => {
  
  return (
    <main className="main-container">
      <Header />
      <Image />
      <Information />
      <Footer />
    </main>

  );
};

export default App;