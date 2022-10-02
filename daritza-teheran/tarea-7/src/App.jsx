import "./styles/app.css";
import "./styles/components.css";
import Masthead from "./components/Masthead";
import Bottom from "./components/Bottom";
import Line from "./components/Lines";
import Lineimage from "./components/Lineimage";
import { masthead, bottom, lineImage, lines } from "./data";

export default function App() {
  return (
    <main>
      <Masthead {...masthead} />
      <section className="cover-lines">
        {lines.map((clines) => (
          <Line lines={clines} />
        ))}
        <Lineimage {...lineImage} />
      </section>
      <Bottom {...bottom} />
    </main>
  );
}
