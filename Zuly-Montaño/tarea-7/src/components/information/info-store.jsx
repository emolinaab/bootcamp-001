export const Info = ({ text, icon }) => {
  return (
    <article className="info-section__article">
      <figure className="info-section__img">
        <img width={"50px"} src={icon} />
      </figure>
      <p>{text}</p>
    </article>
  );
};