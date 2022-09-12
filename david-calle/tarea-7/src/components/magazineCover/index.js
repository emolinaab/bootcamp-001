import "./magazineCoverStyles.css";

const MagazineTitle = ({ title }) => {
  return <h1 id="magazine-title">{title}</h1>;
};

const MagazineTitleDescription = ({ description }) => {
  return <h3 id="magazine-title-description">{description}</h3>;
};

const MagazineCover = () => {
  const magazineTitle = "CATS";
  const magazineTitleDescription = "The best magazine about your feline friend";
  return (
    <div id="magazine-container">
      <MagazineTitle title={magazineTitle} />
      <MagazineTitleDescription description={magazineTitleDescription} />
    </div>
  );
};

export default MagazineCover;
