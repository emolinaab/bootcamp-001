import { Card } from "./info-card";
import iconPlus from "../../assets/iconPlus.webp";

export const Info = () => {
  return (
    <section className="info-section">
      <Card text="Se requiere PS Plus para jugar online" icon={iconPlus} />
      <Card text="Admite hasta 10 jugadores online" icon={iconPlus} />
      <Card text="Compatible con el Uso a distancia" icon={iconPlus} />
      <Card text="Compras dentro del juego opcionales" icon={iconPlus} />
      <Card text="Disponibles de 1-4 jugadores" icon={iconPlus} />
      <Card text="Juego online opcional" icon={iconPlus} />
    </section>
  );
};
