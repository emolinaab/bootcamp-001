import React, { useState } from "react";
import "./statesOfWater.css";

const Water = () => {
  const [currentTemp, setCurrentTemp] = useState(18);

  let setTemperature = (e) => {
    setCurrentTemp(e.target.value);
  };

  let stateOfMatter;
  let stateCss = "liquid";

  if (currentTemp <= 0) {
    stateOfMatter = "Solid";
    stateCss = "solid";
  } else if (currentTemp >= 100) {
    stateOfMatter = "Gas";
    stateCss = "gas";
  } else {
    stateOfMatter = "Liquid";
    stateCss = "liquid";
  }

  return (
    <section>
      <input
        type="text"
        name="water_temperature"
        title="water temperature"
        onChange={setTemperature}
        value={currentTemp}
      />
      <div className={stateCss}>
        <p>
          At {currentTemp}°C, water is considered to be a "{stateOfMatter}"
          state of matter.
        </p>
      </div>
    </section>
  );
};

export default Water;
