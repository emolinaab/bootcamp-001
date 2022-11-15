
import './App.css';
import Movies from './components/Movietoguess';

import Guessbutton from './components/Guessbutton';
function App() {

  let [Name, emojis] = Movies();
  let [Bonus, button] = Guessbutton(Name);

  return (
    <main>

      {Bonus}
      <div id="game">
        <h1>Guess the movie</h1>
        <br /><br />
        <div id="emojibox">
          {emojis}
        </div>

        <br /><br />
        <div id="ans">
          {button}
        </div>

      </div>

    </main>


  );
}

export default App;
