import "./App.css";
import { SectionBackground } from "./components/SectionBackground";
import { Date } from "./components/Date";
import { Titleplay } from "./components/Titleplay";
import { Subtitle2 } from "./components/Subtitle2";
import { Paragrahp } from "./components/Paragrahp";
import Paragraph2 from "./components/Paragraph2";
import Direction from "./components/Direction";

function App() {
  return (
    <main>
      <SectionBackground />
      <Date />
      <Titleplay />
      <Subtitle2 />
      <Paragraph2 />
      <Paragrahp />
      <Direction />
    </main>
  );
}

export default App;
