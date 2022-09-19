import React from "react";
import qr from "../assets/img/barcode1.gif";

const Footer = () => {
  return (
    <div>
      <footer class="container-qr">
        <div class="line">
          <h5>
            LAW NATURE | <span>NEW WORLDS </span> | OUTER SPACE
          </h5>
        </div>

        <img class="code-qr" src={qr} alt="codeQR" />
      </footer>
    </div>
  );
};

export default Footer;
