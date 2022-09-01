function lastSurvivor(letters, coords) {
    letters = letters.split('')
    for(let i = 0; i < coords.length; i++){
      letters.splice(coords[i], 1) 
    }
    letters = letters.join('')
    return letters
  }