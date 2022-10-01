import React from "react";
import "./App.scss";
import { GuessMovie } from "./components/guessMovie";
import Image from "./components/image";

const App = () => {
  return (
    <main className="App">
      <Image />
      <GuessMovie />
    </main>
  );
};

export default App;
