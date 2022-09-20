import React from "react";
import TitleBoxes from "./TitleBoxes";

const Boxes = () => {
  return (
    <section className="container-text">
      <div className="box-left">
        <div className="text">
          <h6>SATURN</h6>
        </div>
      </div>

      <div className="container-boxes">
        <div className="box">
          <TitleBoxes titleBox={"QUANTUM SUPREMACY"} />
        </div>
        <div className="box">
          <TitleBoxes titleBox={"INFLAMMATION OVERLOAD"} />
        </div>
        <div className="box">
          <TitleBoxes titleBox={"HOW DINOSAURS BECAME BIRDS"} />
        </div>
        <div className="box">
          <TitleBoxes titleBox={"SATURN GREAT PLANET"} />
        </div>
      </div>
    </section>
  );
};

export default Boxes;
