import React from "react";
import TitleBoxes from "./TitleBoxes";

const Boxes = () => {
  return (
    <section className="container-text">
      <section className="box-left">
        <h6 className="text">SATURN</h6>
      </section>

      <ul className="container-boxes">
        <li className="box">
          <TitleBoxes titleBox={"QUANTUM SUPREMACY"} />
        </li>
        <li className="box">
          <TitleBoxes titleBox={"INFLAMMATION OVERLOAD"} />
        </li>
        <li className="box">
          <TitleBoxes titleBox={"HOW DINOSAURS BECAME BIRDS"} />
        </li>
        <li className="box">
          <TitleBoxes titleBox={"SATURN GREAT PLANET"} />
        </li>
      </ul>
    </section>
  );
};

export default Boxes;
