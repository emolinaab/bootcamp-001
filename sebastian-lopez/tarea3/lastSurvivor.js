function lastSurvivor(letters, coords) { 
    let lastLetter =Array.from(letters)
    for(let i = 0; i < coords.length; i++){
      lastLetter.splice(coords[i],1)
    }
    return lastLetter.join("")
}