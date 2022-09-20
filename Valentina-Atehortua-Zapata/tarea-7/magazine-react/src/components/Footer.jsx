import React from "react";
import qr from "../assets/img/barcode1.gif";
import TitleFooter from "./TitleFooter";

const Footer = () => {
  return (
    <div>
      <footer className="container-qr">
        <div className="line">
          <TitleFooter title={" LAW NATURE | NEW WORLDS | OUTER SPACE"} />
        </div>

        <img className="code-qr" src={qr} alt="codeQR" />
      </footer>
    </div>
  );
};

export default Footer;
