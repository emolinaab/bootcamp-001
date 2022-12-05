import "./footer.css";
import image from "../../assets/img/mbappe.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-img">
        <img src={image} alt="Imagen de Mbappe" />
      </div>
      <p className="footer-text">
        Mbappé marcó el gol más rápido de la historia del PSG: ¡¡a los 8
        segundos!!
      </p>
    </footer>
  );
};
