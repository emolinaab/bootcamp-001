import { Brand } from "./brand";

export const Header = () => {
  return (
    <header className="header">
      <section className="header__section">
        <Brand />
        <article className="header__article">
          <h1>2K23</h1>
          <p>
            Plataformas: Xbox Series X|S, PlayStation 4, Xbox One, Nintendo
            Switch, PlayStation 5, Microsoft
          </p>
        </article>
      </section>
    </header>
  );
};
