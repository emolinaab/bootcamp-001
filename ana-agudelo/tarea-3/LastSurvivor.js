function lastSurvivor(letters, coords) {
  var lettersArray = letters.split("");
  for(let i=0; i<=coords.length-1; i++){
    var number = coords[i];
    lettersArray.splice(number,1);
  }
  const result = lettersArray.toString();
  return result;
}