import "./article.css";
import imagen from "../../assets/img/lewandowski.png";

export const Article = () => {
  return (
    <article className="content-page">
      <aside className="aside-left">
        <section className="text-content-left">
          <p className="text-content">
            Golazo de Luis Díaz enloqueció a los hinchas del Liverpool
          </p>
        </section>
        <section className="text-content-left">
          <div className="aside-left-img">
            <img src={imagen} alt="Imagen de Mbappe" />
          </div>
          <p className="text-content">
            Doblete de Lewandowski en la victoria de Barcelona sobre Real
            Sociedad
          </p>
        </section>
      </aside>

      <aside className="aside-right">
        <p className="text-content">
          Luis Díaz busca este semestre refrendar su buen comienzo con los Reds.
        </p>
      </aside>
    </article>
  );
};
