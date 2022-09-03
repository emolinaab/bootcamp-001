//https://www.codewars.com/kata/57d06663eca260fe630001cc/train/javascript

function olympicRing(str){
  const dictionary = {
    a: 1, b: 1, d: 1, e: 1, g: 1, o: 1, p: 1, q: 1, A: 1, D: 1, O: 1, P: 1, Q: 1, R: 1,
    B: 2
  };
  
  let rings = 0;
  let total = 0;
  
  for (let i = 0; i <= str.length; i++) {
    if (dictionary[str[i]]) {
      rings += dictionary[str.slice(i, i+1)];
    }
  }
  
  total = rings / 2;
  
  const score = Math.floor(total);
  
  if ( score <= 1 ) {
    return `Not even a medal!`;
  } else if ( score === 2 ) {
    return `Bronze!`;
  } else if ( score === 3 ) {
    return `Silver!`;
  } else {
    return `Gold!`;
  }
}