import iconFooter from "../../assets/iconFooter.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <figure className="footer__img">
        <img src={iconFooter} alt="" />
      </figure>
      <p>
        Compras dentro del juego (Incluye artículos aleatorios), Los usuarios
        interactúan
      </p>
    </footer>
  );
};
