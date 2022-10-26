import { Info } from "./info-store";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";


export const Information = () => {
  return (
    <section className="info-section">
      <Info text="Elige las prendas que mas te gusten y se acomoden a tu estilo" icon={icon1} />
      <Info text="Contamos con gran variedad de accesorios" icon={icon2} />

       </section>
  );
};