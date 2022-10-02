import image from "../assets/image.jpg";

export default function Linemage({ lines }) {
  return (
    <ul>
      <img src={image} />
      {lines.map((line) => (
        <li key={line.toString()}>{line}</li>
      ))}
    </ul>
  );
}
