import "../styles/cover.css";
import { Masthead } from "./Masthead.jsx";
import { CovercardLine, CovercardImage, CovercardBottom } from "./Covercard.jsx";

const masthead = {
  title: "DOG WORLD",
  subtitle: "All about your furry friend and more",
};

const coverLines = [
  ["Caucasian Shepherd", "SPINONE", "Tibetan Mastiff"],
  ["All about", "COCKER SPANIELS"],
  ["+ Vet", "Lameness, a form of osteoarthritis"],
];

const coverImage = {
  url: "/src/assets/image.jpg",
  lines: ["+ Education", "What its behavior is so bad?"],
};

const coverBottom = {
  url: "/src/assets/codigo-de-barras.png",
  data: 'Dog world N°301 - mensual $3.5',
};

export const Cover = () => {
  return (
    <main>
      <Masthead {...masthead} />
      <section className="cover-lines">
        {coverLines.map((clines) => (
          <CovercardLine lines={clines} />
        ))}
        <CovercardImage {...coverImage} />
      </section>
      <CovercardBottom {...coverBottom} />
    </main>
  );
};
