import React from "react";

export const ScoreTable = ({ lives = 3, point = 0 }) => {
  return (
    <section className="score">
      <h3>Lives: {lives}</h3>
      <h3>Points: {point}/20</h3>
    </section>
  );
};
