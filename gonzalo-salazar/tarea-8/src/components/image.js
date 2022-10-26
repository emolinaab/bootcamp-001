import img from "../assets/unitTesting.png";

const Image = () => {
  return (
    <figure className="container-image">
      <img className="container-image__image" src={img}></img>
    </figure>
  );
};

export default Image;
