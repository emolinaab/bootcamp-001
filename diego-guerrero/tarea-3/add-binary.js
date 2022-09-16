function addBinary(a,b) {
    let x = a + b;
    let binary = "";
    while (x > 0) {
      binary = (x % 2) + binary;
      x = Math.floor(x / 2);
    }
    return binary;
  }