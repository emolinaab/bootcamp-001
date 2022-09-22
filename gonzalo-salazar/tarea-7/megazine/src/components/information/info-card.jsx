export const Card = ({ text, icon }) => {
  return (
    <article className="info-section__article">
      <figure className="info-section__img">
        <img width={"30px"} src={icon} />
      </figure>
      <p>{text}</p>
    </article>
  );
};
