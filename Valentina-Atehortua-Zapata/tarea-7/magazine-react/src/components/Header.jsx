import React from "react";
import saturno from "../assets/img/saturno.png";
import PrincipalTitle from "./PrincipalTitle";
import Subtitle from "./Subtitle";

const Header = () => {
  return (
    <header>
      <PrincipalTitle text={"COSMOS"} />
      <Subtitle text={"T H E - S C I E N C E - O F - E V E R Y T H I N G"}/>
      <img className="saturn" src={saturno} alt="" />
    </header>
  );
};

export default Header;
