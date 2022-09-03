//https://www.codewars.com/kata/563319974612f4fa3f0000e0/train/javascript

function mineColor(file, rank) {
  if (((file === 'a' | file === 'c' | file === 'e' | file === 'g') && rank%2 !== 0/*IMPAR*/) |
     ((file === 'b' | file === 'd' | file === 'f' | file === 'h') && rank%2 === 0/*PAR*/)) {
    return `black`;
  } else {
    return `white`;
  }
}