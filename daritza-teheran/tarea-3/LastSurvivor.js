function lastSurvivor(letters, coords) {
  function update(l,c) {
    letters=l.slice(0,c)+ l.slice(c+1);
  }
  coords.forEach((coord) => update(letters,coord))
  return letters
}