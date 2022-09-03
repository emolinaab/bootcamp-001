function lastSurvivor(letters, coords) {
  coords.forEach((coord) => {
    letters = letters.slice(0, coord) + letters.slice(coord + 1);
  });
  return letters;
}
