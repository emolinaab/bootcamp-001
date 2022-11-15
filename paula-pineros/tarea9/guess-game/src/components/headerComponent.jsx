import React, { useState } from "react";

function Header({lives, setLives, points, setPoints}) {
  return (
    <header>
      <nav>
        <dl>
          <dd>Lives: {lives}</dd>
          <dd>Points: {points}</dd>
        </dl>
      </nav>
      <h1>Guess the movie</h1>
    </header>
  );
}

export default Header;
