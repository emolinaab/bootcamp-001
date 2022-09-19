import React from "react";
import saturno from "../assets/img/saturno.png";

const Header = () => {
  return (
    <header>
      <h1>COSMOS</h1>
      <h5 id="h5">T H E - S C I E N C E - O F - E V E R Y T H I N G</h5>
      <img className="saturn" src={saturno} alt="" />
    </header>
  );
};

export default Header;
