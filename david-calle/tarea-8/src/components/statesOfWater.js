import React, { useState } from "react";

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
    <div>
      <input type="text" onChange={setTemperature} value={currentTemp} />
      <div className={stateCss}>
        At {currentTemp}°C, water is considered to be a "{stateOfMatter}" state
        of matter.
      </div>
    </div>
  );
};

export default Water;
