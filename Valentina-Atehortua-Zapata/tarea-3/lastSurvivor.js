function lastSurvivor(letters, coords) {
  const array = letters.split("");

  while (coords.length > 0) {
    let position = coords.shift();
    array.splice(position, 1);
  }
  return array[0];
}
