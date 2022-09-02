function lastSurvivor(letters, coords) {

    coords.forEach(coords => (letters = letters.slice(0,coords)+letters.slice(1+coords)));
    return letters
  }