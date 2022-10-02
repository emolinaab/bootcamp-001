import image from "../assets/codigo-de-barras.png";

export default function Bottom({ data }) {
  return (
    <footer>
      <p>{data}</p>
      <img src={image} />
    </footer>
  );
}
