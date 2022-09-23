import ramen from '../images/ramen.jpg';
import barcode from '../images/barcode.png';

export const Footer = () => {
  return (
    <footer id="footer">
      <p className="cream-color bottom">issue:486 - August 2022</p>
      <p className="cream-color bottom">$7.80</p>
      <img id="images" src={ramen} />
      <img id="barcode" src={barcode} />
    </footer>
  );
};
